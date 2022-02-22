import React, {useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import Appbar from '../../components/appbar/appbar';
import Button from '../../components/atoms/buttons/button';
import Input from '../../components/atoms/textInputs/input';
import PasswordInput from '../../components/atoms/textInputs/passwordInput';
import {colors} from '../../styles/colors';
import style from './style';

const Signup = ({navigation}) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={style.main}>
      <StatusBar
        hidden={false}
        backgroundColor={colors.WHITE}
        barStyle={'dark-content'}
      />
      <Appbar title={'Create Account'} />
      <View style={style.signupBody}>
        <View style={[style.signupContentView]}>
          <Text style={style.signupTitle}>{`Join with us`}</Text>
          <Text
            style={
              style.signupDescription
            }>{`Create account and get early access of our best products, inspiration and many more`}</Text>
        </View>
        <View style={style.signupFormView}>
          <Input name={'Email address'} placeholder={'Enter your email'} />
          <Input name={'Your Name'} placeholder={'Enter your name'} />
          <Input name={'Phone Number'} placeholder={'Enter your Phone'} />
          <PasswordInput
            name={'Password'}
            placeholder={'Enter your password'}
          />
          <Text style={style.signupAgreementText}>
            by creating an account, you agree to our’s Privacy Policy and Terms
            of Use.
          </Text>
          <Button
            name={'Create Account'}
            action={'Progress'}
            message={'Sending Request...'}
          />
          {/* <Text style={style.bottomText}>
            Already Have an Account?{' '}
            <Text
              onPress={() => {
                navigation.navigate('Signup');
              }}
              style={style.bottomText2}>
              Sign Up
            </Text>
          </Text> */}
        </View>
      </View>
    </View>
  );
};

export default Signup;
