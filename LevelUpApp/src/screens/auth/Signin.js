import React, {Component} from 'react';
import {StatusBar, Text, View} from 'react-native';
import Button from '../../components/atoms/buttons/button';
import {colors} from '../../styles/colors';
import style from './style';

const Signin = ({navigation}) => {
  return (
    <View style={style.main}>
      <StatusBar
        translucent={false}
        backgroundColor={colors.WHITE}
        barStyle="dark-content"
      />
    </View>
  );
};

export default Signin;
