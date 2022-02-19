import React, {useEffect} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {colors} from '../../styles/colors';
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
      <Text style={style.appbarTitle}>{props.title}</Text>
    </View>
  );
};
export default Appbar;
