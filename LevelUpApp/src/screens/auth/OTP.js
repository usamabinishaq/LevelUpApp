import React, {useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Appbar from '../../components/appbar/appbar';
import Button from '../../components/atoms/buttons/button';
import RoundedButton from '../../components/atoms/buttons/roundedButton';
import OtpInput from '../../components/atoms/textInputs/otpInput';
import {colors} from '../../styles/colors';
import style from './style';

const OTP = (props, navigation) => {
  return (
    <View style={style.main}>
      <StatusBar
        hidden={false}
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
        <View style={style.otpForm}>
          <Text style={style.otpHeading}>Enter Code</Text>
          <OtpInput />
          <View style={style.otpIsCorrect}>
            <Icon name={'check-bold'} color={colors.BLUE} size={20} />
          </View>
          <RoundedButton name={'Verify'} top={'15%'} action={'Services'} />
        </View>
      </View>
    </View>
  );
};
export default OTP;
