import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomCalendar from '../components/CustomCalendar';
import LaunchCard from '../components/LaunchCard';
import moment from 'moment';
import axios from 'axios';
import SearchFilter from '../components/SearchFilter';

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
  const [result, setResult] = useState<any[]>([]);
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
      setResult([])
    }
  };

  useEffect(() => {
    axios
      .get('https://api.spacexdata.com/v5/launches')
      .then((res: any) => setLaunches(res?.data))
      .catch(err => console.log(err));
  });

  useEffect(() => {
    axios
      .post('https://api.spacexdata.com/v5/launches/query', {
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
        onDayPress={(day: any) => {
          setDate({
            start: moment(day.dateString).add(3, 'hours').toISOString(),
            end: moment(day.dateString).add(27, 'hours').toISOString(),
          });
        }}
      />
      <SearchFilter
        placeholder="Type a launch name"
        defaultValue={search}
        onChangeText={(text: string) => onSearchInLaunches(text)}
      />
      <FlatList
        data={result}
        ListHeaderComponent={
            <View style={{paddingHorizontal:16}}>
                <Text style={{fontSize:16,fontWeight:'600',marginBottom:20,marginTop:30}}>Results</Text>
            </View>
        }
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
});
