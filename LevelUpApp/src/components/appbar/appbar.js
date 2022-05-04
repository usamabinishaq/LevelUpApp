import React, {useEffect} from 'react';
import {Image, StatusBar, Text, View, TouchableOpacity} from 'react-native';
import {Images} from '../../services/images';
import {colors} from '../../styles/colors';
import globalStyle from '../../styles/globalStyle';
import BackButton from '../atoms/buttons/backButton';
import style from '../atoms/style';
import Icon from 'react-native-vector-icons/Ionicons';
import * as RootNavigation from '../../navigations/RootNavigation';

const Appbar = (props, navigation) => {
  return (
    <View style={style.appbar}>
      <StatusBar
        translucent={false}
        backgroundColor={colors.WHITE}
        barStyle="dark-content"
      />
      {props.left ? (
        <TouchableOpacity onPress={props.onPress}>
          <Icon name={props.left} size={25} color={colors.PRIMARY} />
        </TouchableOpacity>
      ) : (
        <BackButton />
      )}

      {props.name ? (
        <View style={style.imgContainer}>
          <Image source={Images.Logo2} style={[globalStyle.logo]} />
          <TouchableOpacity onPress={() => RootNavigation.navigate('Profile')}>
            <Image source={Images.profile} style={style.profile} />
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={style.appbarTitle}>{props.title}</Text>
      )}
    </View>
  );
};
export default Appbar;
