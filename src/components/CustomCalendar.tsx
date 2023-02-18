import { View, Text } from 'react-native'
import React from 'react'
import { Calendar, DateData } from "react-native-calendars";
import moment from "moment"

interface Props {
  onDayPress:Function
}

const CustomCalendar = (props:Props) => {


  return (
    <View style={{alignItems:'center',borderWidth:1}}>
      <Text>Calendar</Text>

      <Calendar 
      onDayPress={(day)=>props.onDayPress && props.onDayPress(day)}
      />
      
    </View>
  )
}

export default CustomCalendar