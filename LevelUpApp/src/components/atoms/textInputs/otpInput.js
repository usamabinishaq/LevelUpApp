import React, {useRef} from 'react';
import {TextInput, View} from 'react-native';
import {colors} from '../../../styles/colors';
import style from '../style';

const OtpInput = (props, navigation) => {
  return (
    <View style={style.otpInputView}>
      <TextInput
        placeholder="0"
        caretHidden={true}
        style={style.otpInput}
        placeholderTextColor={colors.GRAY_LIGHT}
        maxLength={1}
        keyboardType="numeric"
        returnKeyType="next"
      />
      <TextInput
        placeholder="0"
        caretHidden={true}
        style={style.otpInput}
        placeholderTextColor={colors.GRAY_LIGHT}
        maxLength={1}
        keyboardType="numeric"
        returnKeyType="next"
      />
      <TextInput
        placeholder="0"
        caretHidden={true}
        style={style.otpInput}
        placeholderTextColor={colors.GRAY_LIGHT}
        maxLength={1}
        keyboardType="numeric"
        returnKeyType="next"
      />
      <TextInput
        placeholder="0"
        caretHidden={true}
        style={style.otpInput}
        placeholderTextColor={colors.GRAY_LIGHT}
        maxLength={1}
        keyboardType="numeric"
        returnKeyType="done"
      />
    </View>
  );
};
export default OtpInput;
