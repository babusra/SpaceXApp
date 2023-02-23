import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import { Colors } from '../resources/Colors';

interface Props {
  data: {
    name: string;
    details: string;
  };
  onPress: Function;
}
const LaunchCard = (props: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => props.onPress && props.onPress()}>
      <Text style={styles.name}>{props.data.name}</Text>
      <Text style={styles.details}>{props.data.details ? props.data.details: 'No details'}</Text>
    </TouchableOpacity>
  );
};

export default LaunchCard;

const styles = StyleSheet.create({
  container: {
    borderColor:Colors.primaryBorderGray,
    backgroundColor:Colors.white,
    borderWidth:1,
    minHeight:100,
    marginHorizontal:22,
    marginVertical:10,
    paddingHorizontal:10,
    paddingVertical:8,
    borderRadius:8,
    shadowOffset: {width: 0.5, height: 1},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3, 
  },
  name:{
    fontWeight:'500',
    fontSize:20,
    paddingHorizontal:15,
    paddingVertical:8,
  },
  details:{
    paddingHorizontal:15,
    paddingVertical:8,
    color:Colors.secondarGray
  }
});
