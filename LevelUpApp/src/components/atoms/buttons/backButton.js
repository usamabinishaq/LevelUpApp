import React, {Component, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import * as RootNavigation from '../../../navigations/RootNavigation';
import {colors} from '../../../styles/colors';
import style from '../style';

const BackButton = (props, navigation) => {
  return (
    <TouchableOpacity
      style={style.backButtonView}
      onPress={() => {
        RootNavigation.back();
      }}>
      <Icon name={'arrowleft'} size={18} color={colors.WHITE} />
    </TouchableOpacity>
  );
};
export default BackButton;
