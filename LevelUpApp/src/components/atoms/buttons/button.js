import React, {Component, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import * as RootNavigation from '../../../navigations/RootNavigation';
import globalStyle from '../../../styles/globalStyle';

const Button = (props, navigation) => {
  return (
    <TouchableOpacity
      style={[globalStyle.button, props.top ? {top: props.top} : null]}
      onPress={() => RootNavigation.navigate(props.action)}>
      <Text style={globalStyle.font1}>{props.name}</Text>
    </TouchableOpacity>
  );
};
export default Button;
