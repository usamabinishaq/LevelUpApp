import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import * as RootNavigation from '../../../navigations/RootNavigation';
import globalStyle from '../../../styles/globalStyle';

const RoundedButton = (props, navigation) => {
  return (
    <TouchableOpacity
      style={[globalStyle.roundedButton, props.top ? {top: props.top} : null]}
      onPress={props.onPress}>
      <Text style={globalStyle.poppinsFont1}>{props.name}</Text>
    </TouchableOpacity>
  );
};
export default RoundedButton;
