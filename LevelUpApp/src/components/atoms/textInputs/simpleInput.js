import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../styles/colors';
import {FONT_14} from '../../../styles/typography';
import style from './style';
export default SimpleInput = (props, navigation) => {
  return (
    <View style={{marginBottom: '3.5%'}}>
      <Text style={style.inputName}>{props.name}</Text>
      <TextInput
        style={style.simpleInput}
        placeholder={props.placeholder}
        maxLength={props.length}
        keyboardType={props.inputType}
      />
    </View>
  );
};
