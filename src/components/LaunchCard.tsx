import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'


interface Props {
    data:{
        name:string,
        details:string,
        
    }
}
const LaunchCard = (props:Props) => {


  return (
    <View>
      <Text>name: {props.data.name}</Text>
      <Text>details: {props.data.details}</Text>
    </View>
  )
}

export default LaunchCard