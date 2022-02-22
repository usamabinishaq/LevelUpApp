import React, {useEffect} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {Images} from '../../services/images';
import {colors} from '../../styles/colors';
import globalStyle from '../../styles/globalStyle';
import BackButton from '../atoms/buttons/backButton';
import style from '../atoms/style';

const Appbar = (props, navigation) => {
  return (
    <View style={style.appbar}>
      <StatusBar
        translucent={false}
        backgroundColor={colors.WHITE}
        barStyle="dark-content"
      />
      <BackButton />
      {props.name ? (
        <View style={style.imgContainer}>
          <Image source={Images.Logo2} style={[globalStyle.logo]} />
          <Image source={Images.profile} style={style.profile} />
        </View>
      ) : (
        <Text style={style.appbarTitle}>{props.title}</Text>
      )}
    </View>
  );
};
export default Appbar;
