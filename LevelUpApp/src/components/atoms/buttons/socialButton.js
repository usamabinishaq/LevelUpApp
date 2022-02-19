import React, {Component, useEffect} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import * as RootNavigation from '../../../navigations/RootNavigation';
import {colors} from '../../../styles/colors';

import globalStyle from '../../../styles/globalStyle';
import style from '../style';

const SocialButton = (props, navigation) => {
  return (
    <TouchableOpacity
      style={[globalStyle.socialButton]}
      onPress={() =>
        props.action
          ? RootNavigation.navigate(props.action)
          : alert('Successful')
      }>
      <Image source={props.image} style={style.socialIcon} />
      <Text style={[globalStyle.nunitoFont3, {color: colors.BLACK}]}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};
export default SocialButton;
