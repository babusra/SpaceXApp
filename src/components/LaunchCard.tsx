import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import axios from 'axios';

interface Props {
  data: {
    name: string;
    details: string;
  };
  onPress: Function;
}
const LaunchCard = (props: Props) => {
  return (
    <TouchableOpacity onPress={() => props.onPress && props.onPress()}>
      <Text>name: {props.data.name}</Text>
      <Text>details: {props.data.details}</Text>
    </TouchableOpacity>
  );
};

export default LaunchCard;
