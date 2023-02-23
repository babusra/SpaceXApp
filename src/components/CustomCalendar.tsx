import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Calendar, DateData} from 'react-native-calendars';
import moment from 'moment';
import Day from 'react-native-calendars/src/calendar/day';
import {Colors} from '../resources/Colors';

interface Props {
  onDayPress: Function;
  launches: any[];
}

const CustomCalendar = (props: Props) => {
  const [selectedDate, setSelectedDate] = useState<any>();
  const {launches} = props;
  return (
    <View style={{alignItems: 'center'}}>
      <Calendar


        theme={{
          arrowColor: Colors.primaryBlue,
        }}


        dayComponent={({date, state}) => {
          const isDay = launches.filter(
            item =>
              moment(item.date_local).format('YYYY-MM-DD') === date?.dateString,
          );
          const isSelectedDate = date?.dateString === selectedDate;
          return (
            <TouchableOpacity
              style={{
                backgroundColor: isDay.length !== 0 ? Colors.primaryBlue : Colors.white,
                borderWidth: isSelectedDate ? 1 : 0,
                borderColor: Colors.primaryBlue,
                borderRadius: 100,
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                setSelectedDate(date?.dateString);
                console.log(date?.dateString);
                props.onDayPress(date);
              }}>
              <Text
                style={{
                  color: isDay.length !== 0 ? Colors.white : Colors.primaryGray,
                }}>
                {date?.day}
              </Text>
            </TouchableOpacity>
          );
        }}

        
      />
    </View>
  );
};

export default CustomCalendar;
