import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../assets/color/colors';
import globalStyle from '../../styles/globalStyle';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setTimeCall();
  }
  setTimeCall = () => {
    setTimeout(() => {
      this.props.navigation.replace('OnBoarding');
    }, 2000);
  };
  render() {
    return (
      <View style={globalStyle.mainContainer}>
        <StatusBar hidden />
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.topImage}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  topImage: {
    width: 185.1,
    height: 55.79,
    resizeMode: 'cover',
  },
});

export default Splash;
