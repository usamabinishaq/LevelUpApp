import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Images} from '../../services/images';

import style from './style';

const Progress = ({navigation, route}) => {
  setTimeCall = () => {
    setTimeout(() => {
      navigation.replace(route.params.action, {
        service: route.params.param ? route.params.param : null,
      });
    }, 2000);
  };
  useEffect(() => {
    setTimeCall();
  }, []);
  return (
    <View style={styles.main}>
      <ImageBackground
        source={Images.progressBackgroundImage}
        style={style.backgroundImage}>
        <StatusBar hidden />
        <View style={style.progressView}>
          <Image source={Images.running} style={style.loadingImage} />
        </View>
        <Text style={style.progressTitle}>{route.params.message}</Text>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
export default Progress;
