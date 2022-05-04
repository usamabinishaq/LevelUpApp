import React, {Component, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AuthNavigator from '../../navigations/stack/AuthNavigator';
import {Images} from '../../services/images';

import globalStyle from '../../styles/globalStyle';
import {verticalScale} from '../../styles/mixins';
import style from './style';

const Splash = () => {
  const [timeout, setTimeOut] = useState(false);

  const setNavigator = () => {
    return <AuthNavigator />;
  };

  setTimeCall = () => {
    setTimeout(() => {
      //Check If User is Logged in Than Direct Navigate To Bottom Tabs Else Auth
      setTimeOut(true);
    }, 2000);
  };
  useEffect(() => {
    setTimeCall();
  }, []);

  return timeout ? (
    setNavigator()
  ) : (
    <View style={globalStyle.mainContainer}>
      <StatusBar hidden />
      <Image source={Images.Logo} style={style.topImage} />
    </View>
  );
};

export default Splash;
