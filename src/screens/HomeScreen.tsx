import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomCalendar from '../components/CustomCalendar';
import LaunchCard from '../components/LaunchCard';
import moment from 'moment';
import axios from 'axios';

const HomeScreen = () => {
  const [date, setDate] = useState({start: moment(), end: moment()});
  const [result, setResult] = useState<any[]>([]);

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
    console.log('date', date);
    console.log('obaa', result);
  }, [date]);

  console.log("yo",result.map((a)=>a.links.youtube_id))
  return (
    <SafeAreaView style={styles.container}>
      <CustomCalendar
        onDayPress={(day: any) => {
          setDate({
            start: moment(day.dateString).add(3, 'hours').toISOString(),
            end: moment(day.dateString).add(27, 'hours').toISOString(),
          });
          console.log(date);
        }}
      />
      <FlatList
        data={result}
        renderItem={({item}) => {
          return <LaunchCard data={item} />;
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
