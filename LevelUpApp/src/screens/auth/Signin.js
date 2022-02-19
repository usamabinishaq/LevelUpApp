import React, {Component, useState} from 'react';
import {Image, StatusBar, Text, TextInput, View} from 'react-native';
import {Checkbox} from 'react-native-paper';
import Button from '../../components/atoms/buttons/button';
import SocialButton from '../../components/atoms/buttons/socialButton';
import Input from '../../components/atoms/textInputs/input';
import PasswordInput from '../../components/atoms/textInputs/passwordInput';
import {Images} from '../../services/images';
import {colors} from '../../styles/colors';
import {NUNITO_BOLD} from '../../styles/typography';
import style from './style';

const Signin = ({navigation}) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={style.main}>
      <StatusBar
        translucent={false}
        hidden={false}
        backgroundColor={colors.WHITE}
        barStyle="dark-content"
      />
      <View style={style.topImageView}>
        <Image source={Images.Logo2} style={style.logo} />
      </View>
      <View style={style.contentView}>
        <Text style={style.welcomeText}>{`Welcome Back !`}</Text>
        <Text
          style={
            style.quoteText
          }>{`Stay signed in with your account to make searching easier`}</Text>
      </View>
      <View style={style.formView}>
        <Input name={'Email'} placeholder={'Enter your email'} />
        <PasswordInput name={'Password'} placeholder={'Enter your password'} />
        <View style={style.forgetView}>
          <View style={style.checkboxView}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              uncheckedColor={colors.GRAY_LIGHT}
              color={colors.PRIMARY}
            />
            <Text style={style.checkboxText}>{`Keep me signed in`}</Text>
          </View>
          <Text style={style.forgetText}>Forgot password?</Text>
        </View>
        <Button name={'Sign In'} />
        <View style={style.orView}>
          <Text style={style.orText}>Or</Text>
        </View>
      </View>
      <View style={style.socialButtonsView}>
        <SocialButton name={'Continue with Google'} image={Images.google} />
        <SocialButton name={'Continue with Facebook'} image={Images.facebook} />
        <Text style={style.bottomText}>
          Don’t Have an Account?{' '}
          <Text
            onPress={() => {
              navigation.navigate('Signup');
            }}
            style={style.bottomText2}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Signin;
