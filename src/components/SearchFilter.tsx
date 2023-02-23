import {View, Text, TextInput, TextInputProps, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

interface Props extends TextInputProps {
  onChangeText: (text: string) => void;
}

const SearchFilter = (props: Props) => {
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>Search</Text>
      </View>
      <View
        style={styles.inputArea}>
        <TextInput
          autoCapitalize={'none'}
          {...props}
          onChangeText={text => props.onChangeText(text)}
        />
      </View>
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0194E9',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  inputArea:{
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'lightgray',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 75,
  }
});
