import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomCalendar from '../components/CustomCalendar';
import LaunchCard from '../components/LaunchCard';
import moment from 'moment';
import axios from 'axios';
import SearchFilter from '../components/SearchFilter';
import {useIsFocused} from '@react-navigation/native';
import {end_points} from '../end_points';
import {Colors} from '../resources/Colors';

interface Props {
  navigation?: any;
}

interface date {
  start: any;
  end: any;
}

const HomeScreen = (props: Props) => {
  const [date, setDate] = useState<date>({start: moment(), end: moment()});
  const [launches, setLaunches] = useState<any[]>([]);
  const [result, setResult] = useState<any[]>(launches);
  const [search, setSearch] = useState('');

  const onSearchInLaunches = (text: string) => {
    if (text) {
      let temp = launches.filter((item: {name: string}) =>
        item?.name
          ?.toLocaleLowerCase('tr')
          .includes(text.toLocaleLowerCase('tr')),
      );
      setResult(temp);
      setSearch(text);
    } else {
      setSearch('');
      setResult(launches);
    }
  };

  useEffect(() => {
    axios
      .get(end_points.getAllLaunches)
      .then((res: any) => setLaunches(res?.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .post(end_points.getLaunchesByQuery, {
        query: {
          date_utc: {
            $gte: date.start,
            $lte: date.end,
          },
        },
        options: {
          sort: {
            flight_number: 'asc',
          },
          limit: 5000,
        },
      })
      .then(res => setResult(res?.data?.docs));
  }, [date]);

  return (
    <SafeAreaView style={styles.container}>
      <CustomCalendar
        onDayPress={(date: any) => {
          setDate({
            start: moment(date?.dateString).add(3, 'hours').toISOString(),
            end: moment(date.dateString).add(27, 'hours').toISOString(),
          });
        }}
        launches={launches}
      />
      <View style={styles.line} />

      <SearchFilter
        placeholder="Type a launch.."
        defaultValue={search}
        onChangeText={(text: string) => onSearchInLaunches(text)}
      />
      <View style={{paddingHorizontal: 16}}>
        <Text
          style={styles.resultText}>
          Results
        </Text>
      </View>
      <FlatList
        data={result}
        renderItem={({item}) => {
          return (
            <LaunchCard
              data={item}
              onPress={() =>
                props.navigation.navigate('LaunchDetail', {item: item})
              }
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  line: {
    borderWidth: 0.75,
    marginHorizontal: 20,
    marginVertical: 20,
    borderColor: Colors.primaryBlue,
  },
  resultText:{
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 30,
    color: Colors.primaryBlue,
  }
});
