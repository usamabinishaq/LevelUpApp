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
      this.props.navigation.replace('GettingStarted');
    }, 2000);
  };
  render() {
    return (
      <View style={globalStyle.mainContainer}>
        <StatusBar hidden />
        {/* <View style={styles.topImageView}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.topImage}
          />
        </View>
        <View
          style={{
            flex: 0.65,
            justifyContent: 'flex-end',
          }}>
          <Image
            source={require('../../assets/images/img.png')}
            style={styles.bottomImage}
          />
        </View> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  topImageView: {
    flex: 0.35,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  bottomImage: {
    width: '175%',
    height: '175%',
    top: '61%',
    right: '50%',
    resizeMode: 'contain',
  },
});

export default Splash;
