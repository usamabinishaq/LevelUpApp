import React, {useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import Appbar from '../../components/appbar/appbar';
import Button from '../../components/atoms/buttons/button';
import style from './style';

const OTP = (props, navigation) => {
  return (
    <View style={style.main}>
      <StatusBar
        translucent={false}
        backgroundColor={colors.WHITE}
        barStyle="dark-content"
      />
      <Appbar title={'Verification'} />
      <View style={style.signupBody}>
        <View style={[style.signupContentView]}>
          <Text style={style.signupTitle}>{`OTP Authentication`}</Text>
          <Text
            style={
              style.signupDescription
            }>{`An Authentication code has been sent to +966 *** ****44`}</Text>
        </View>
        <View style={style.otpForm}></View>
      </View>
    </View>
  );
};
export default OTP;
