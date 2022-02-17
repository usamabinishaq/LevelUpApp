import React, {Component, useEffect} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import globalStyle from '../../styles/globalStyle';
import {scaleSize, verticalScale} from '../../styles/mixins';

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
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.topImage}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  topImage: {
    width: scaleSize(185.1),
    height: verticalScale(55.79),
    resizeMode: 'cover',
  },
});

export default Splash;
