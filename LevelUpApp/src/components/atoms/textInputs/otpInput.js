import React, {useRef, useState} from 'react';
import {TextInput, View, Keyboard} from 'react-native';
import {colors} from '../../../styles/colors';
import style from '../style';

const OtpInput = (props, navigation) => {
  ///REfrnce
  const inputRef1 = useRef('one');
  const inputRef2 = useRef('two');
  const inputRef3 = useRef('three');
  const inputRef4 = useRef('four');
  const [focus, setFocus] = useState({
    focus1: false,
    focus2: false,
    focus3: false,
    focus4: false,
  });
  const [otpStatus, setOtpStatus] = useState({
    input1: false,
    input2: false,
    input3: false,
    input4: false,
  });
  const [otp, setOtp] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });

  const _handleFocus = type => () => {
    if (type === '1') {
      setFocus({...focus, focus1: true});
    } else if (type === '2') {
      setFocus({...focus, focus2: true});
    } else if (type === '3') {
      setFocus({...focus, focus3: true});
    } else {
      setFocus({...focus, focus4: true});
    }
  };
  const _onChangeText = type => text => {
    let otpText = text.trim();
    if (type === '1') {
      setOtp({...otp, input1: otpText});
      if (otpText.length === 1) {
        inputRef2.current.focus();
        setOtpStatus({...otpStatus, input1: true});
      } else setOtpStatus({...otpStatus, input1: false});
    } else if (type === '2') {
      setOtp({...otp, input2: otpText});
      if (otpText.length === 1) {
        inputRef3.current.focus();
        setOtpStatus({...otpStatus, input2: true});
      } else setOtpStatus({...otpStatus, input3: false});
    } else if (type === '3') {
      setOtp({...otp, input3: otpText});
      if (otpText.length === 1) {
        inputRef4.current.focus();
        setOtpStatus({...otpStatus, input3: true});
      } else setOtpStatus({...otpStatus, input3: false});
    } else {
      setOtp({...otp, input4: otpText});
      if (otpText.length === 1) {
        Keyboard.dismiss();
        setOtpStatus({...otpStatus, input4: true});
      } else setOtpStatus({...otpStatus, input4: false});
    }
  };

  const _focusToNext = type => () => {
    if (type === '1') inputRef2.current.focus();
    else if (type === '2') inputRef3.current.focus();
    else if (type === '3') inputRef4.current.focus();
    else Keyboard.dismiss();
  };

  const _onKeyPress =
    type =>
    ({nativeEvent}) => {
      if (type === '2') {
        nativeEvent['key'] === 'Backspace' && _backSpace(type);
      } else if (type === '3') {
        nativeEvent['key'] === 'Backspace' && _backSpace(type);
      } else if (type === '4') {
        nativeEvent['key'] === 'Backspace' && _backSpace(type);
      }
    };

  const _backSpace = type => {
    if (type === '2') {
      setOtp({...otp, input2: ''});
      inputRef1.current.focus();
      setOtpStatus({...otpStatus, input2: false});
    } else if (type === '3') {
      setOtp({...otp, input3: ''});
      inputRef2.current.focus();
      setOtpStatus({...otpStatus, input3: false});
    } else if (type === '4') {
      setOtp({...otp, input4: ''});
      inputRef3.current.focus();
      setOtpStatus({...otpStatus, input4: false});
    }
  };
  const _closeKeyboard = () => Keyboard.dismiss();

  return (
    <View style={style.otpInputView}>
      <TextInput
        ref={inputRef1}
        placeholder="0"
        caretHidden={true}
        style={style.otpInput}
        placeholderTextColor={colors.GRAY_LIGHT}
        maxLength={1}
        keyboardType="numeric"
        returnKeyType="next"
        autoFocus={true}
        onKeyPress={_onKeyPress('1')}
        onFocus={_handleFocus('1')}
        onSubmitEditing={_focusToNext('1')}
        onChangeText={_onChangeText('1')}
        blurOnSubmit={false}
      />
      <TextInput
        ref={inputRef2}
        placeholder="0"
        caretHidden={true}
        style={style.otpInput}
        placeholderTextColor={colors.GRAY_LIGHT}
        maxLength={1}
        keyboardType="numeric"
        returnKeyType="next"
        onKeyPress={_onKeyPress('2')}
        onFocus={_handleFocus('2')}
        onSubmitEditing={_focusToNext('2')}
        onChangeText={_onChangeText('2')}
        blurOnSubmit={false}
      />
      <TextInput
        ref={inputRef3}
        placeholder="0"
        caretHidden={true}
        style={style.otpInput}
        placeholderTextColor={colors.GRAY_LIGHT}
        maxLength={1}
        keyboardType="numeric"
        returnKeyType="next"
        onKeyPress={_onKeyPress('3')}
        onFocus={_handleFocus('3')}
        onSubmitEditing={_focusToNext('3')}
        onChangeText={_onChangeText('3')}
        blurOnSubmit={false}
      />
      <TextInput
        ref={inputRef4}
        placeholder="0"
        caretHidden={true}
        style={style.otpInput}
        placeholderTextColor={colors.GRAY_LIGHT}
        maxLength={1}
        keyboardType="numeric"
        returnKeyType="done"
        onKeyPress={_onKeyPress('4')}
        onFocus={_handleFocus('4')}
        onChangeText={_onChangeText('4')}
        onSubmitEditing={_closeKeyboard}
      />
    </View>
  );
};
export default OtpInput;
