import {View, Text, TextInput, TextInputProps} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

interface Props extends TextInputProps {
  onChangeText: (text: string) => void;
}

const SearchFilter = (props: Props) => {
  return (
    <View style={{borderWidth: 1,borderRadius:6, borderColor: 'lightgray', padding: 15,margin:10}}>
      <TextInput
        autoCapitalize={'none'}
        {...props}
        onChangeText={text => props.onChangeText(text)}
      />
    </View>
  );
};

export default SearchFilter;
