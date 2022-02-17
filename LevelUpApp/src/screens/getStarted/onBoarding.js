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
import {colors} from '../../styles/colors';
import globalStyle from '../../styles/globalStyle';
import {scaleSize} from '../../styles/mixins';
import style from './style';

const OnBoarding = ({navigation}) => {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={require('../../assets/images/5.jpg')}
        style={style.backgroundImage}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={style.topView}>
          <Image
            source={require('../../assets/images/logo1.png')}
            style={style.logo}
          />
        </View>
        <View style={style.bottomView}>
          <Text
            style={
              styles.text
            }>{`Find what workout you need and get personal trainer for you`}</Text>
          <Button name={'Get Started'} action={'Signup'} top={'10%'} />
          <Text style={[globalStyle.font3, {top: '16.5%'}]}>
            {`Already a member?`}
            <Text
              onPress={() => {
                navigation.navigate('Signin');
              }}
              style={{
                color: colors.lIGHTBLUE,
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
  text: [globalStyle.font2, {top: '7%', width: scaleSize(300)}],
});
export default OnBoarding;
