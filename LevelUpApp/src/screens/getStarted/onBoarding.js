import React from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../../components/atoms/buttons/button';
import {Images} from '../../services/images';
import {colors} from '../../styles/colors';
import globalStyle from '../../styles/globalStyle';
import {scaleSize} from '../../styles/mixins';
import style from './style';

const OnBoarding = ({navigation}) => {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={Images.GetStartedBackground}
        style={style.backgroundImage}
        resizeMode="cover">
        <StatusBar hidden />
        <View style={style.topView}>
          <Image source={Images.TransparentLogo} style={style.logo} />
        </View>
        <View style={style.bottomView}>
          <Text
            style={
              styles.text
            }>{`Find what workout you need and get personal trainer for you`}</Text>
          <Button name={'Get Started'} action={'Signup'} top={'10%'} />
          <Text
            style={[
              globalStyle.poppinsFont2,
              {top: '16.5%', color: 'rgba(255, 255, 255, 0.5)'},
            ]}>
            {`Already a member?`}
            <Text
              onPress={() => {
                navigation.navigate('Signin');
              }}
              style={{
                color: colors.BLUE,
              }}>{` Login`}</Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  text: [
    globalStyle.poppinsFont2,
    {top: '7%', width: scaleSize(300), color: colors.WHITE},
  ],
});
export default OnBoarding;
