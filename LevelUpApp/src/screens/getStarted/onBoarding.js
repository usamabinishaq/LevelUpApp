import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../assets/color/colors';
let winWidth = Dimensions.get('window').width;
let winHeight = Dimensions.get('window').height;
class OnBoarding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.main}>
        <ImageBackground
          resizeMethod="scale"
          source={require('../../assets/images/5.png')}
          style={styles.backgroundImage}>
          <StatusBar translucent backgroundColor="transparent" />
          <View
            style={{
              flex: 0.56,
              justifyContent: 'flex-end',
            }}>
            <Image
              source={require('../../assets/images/logo1.png')}
              style={styles.logo}
            />
          </View>
          <View
            style={{
              flex: 0.44,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                fontFamily: 'poppinsmedium',
                fontSize: 16,
                textAlign: 'center',
                color: colors.white,
                lineHeight: 24,
                bottom: '12%',
              }}>{`Find what workout you need and get personal trainer for you`}</Text>
            <View
              style={{
                width: 335,
                height: 48,
                borderRadius: 10,
                backgroundColor: colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                bottom: '5%',
              }}>
              <Text
                style={{
                  fontFamily: 'poppinsbold',
                  fontSize: 16,
                  textAlign: 'center',
                  color: colors.white,
                  lineHeight: 24,
                }}>
                Get Started
              </Text>
            </View>
            <Text
              style={{
                fontFamily: 'poppinsmedium',
                fontSize: 14,
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 21,
              }}>
              {`Already a member?`}
              <Text
                style={{
                  color: colors.lightDarkBlue,
                }}>{` Login`}</Text>
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  backgroundImage: {
    width: winWidth,
    height: winHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {width: 214.2, height: 64.56, resizeMode: 'contain'},
});
export default OnBoarding;
