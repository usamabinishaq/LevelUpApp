import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import Appbar from '../../components/appbar/appbar';
import {colors} from '../../styles/colors';

export default function Payment(props, navigation) {
  return (
    <View style={{flex: 1, backgroundColor: colors.WHITE}}>
      <Appbar title={'Payment'} />
      <View style={{flex: 0.9, alignItems: 'center'}}>
        <Image
          source={require('../../assets/images/payment.png')}
          style={{
            height: '110%',
            width: '125%',
            resizeMode: 'contain',
          }}
        />
      </View>
    </View>
  );
}
