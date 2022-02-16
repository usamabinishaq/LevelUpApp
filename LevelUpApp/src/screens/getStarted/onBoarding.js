import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../styles/colors';

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
          source={require('../../assets/images/5.jpg')}
          style={styles.backgroundImage}>
          <StatusBar translucent backgroundColor="transparent" />
          <View
            style={{
              flex: 0.55,
              justifyContent: 'flex-end',
            }}>
            <Image
              source={require('../../assets/images/logo1.png')}
              style={styles.logo}
            />
          </View>
          <View
            style={{
              flex: 0.45,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'poppinsmedium',
                fontSize: 16,
                textAlign: 'center',
                color: colors.white,
                lineHeight: 24,
                top: '7.5%',
              }}>{`Find what workout you need and get personal trainer for you`}</Text>
            <TouchableOpacity
              style={{
                width: 335,
                height: 48,
                borderRadius: 10,
                backgroundColor: colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                top: '10%',
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
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: 'poppinsmedium',
                fontSize: 14,
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.5)',
                lineHeight: 21,
                top: '16.5%',
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
  logo: {width: 175, height: 52.75},
});
export default OnBoarding;
