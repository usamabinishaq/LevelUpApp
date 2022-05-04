import React, {Component, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import * as RootNavigation from '../../../navigations/RootNavigation';
import globalStyle from '../../../styles/globalStyle';

const Button = props => {
  return (
    <TouchableOpacity
      style={[globalStyle.button, props.top ? {top: props.top} : null]}
      onPress={props.onPress}>
      <Text style={globalStyle.poppinsFont1}>{props.name}</Text>
    </TouchableOpacity>
  );
};
export default Button;
