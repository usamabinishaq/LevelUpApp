import React, {Component, useEffect} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Images} from '../../services/images';

import globalStyle from '../../styles/globalStyle';
import {verticalScale} from '../../styles/mixins';
import style from './style';

const Splash = ({navigation}) => {
  setTimeCall = () => {
    setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 2000);
  };
  useEffect(() => {
    setTimeCall();
  }, []);
  return (
    <View style={globalStyle.mainContainer}>
      <StatusBar hidden />
      <Image source={Images.Logo} style={style.topImage} />
    </View>
  );
};

export default Splash;
