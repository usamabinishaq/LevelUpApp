import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../styles/colors';
import style from '../style';
const Input = (props, navigation) => {
  return (
    <View style={{marginBottom: '3.5%'}}>
      <Text style={style.inputName}>{props.name}</Text>
      <View style={style.inputView}>
        <TextInput
          style={style.input}
          placeholder={props.placeholder}
          placeholderTextColor={colors.silverBlue}
        />
        <Icon
          name={'check'}
          color={colors.BLUE}
          size={20}
          style={style.inputIcon}
        />
      </View>
    </View>
  );
};
export default Input;
