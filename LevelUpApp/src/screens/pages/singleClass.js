import React from 'react';
import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
import Appbar from '../../components/appbar/appbar';
import {colors} from '../../styles/colors';

export default function SingleClass({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: colors.WHITE}}>
      <Appbar title={'Our Class'} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Payment');
        }}
        style={{flex: 0.9, alignItems: 'center'}}>
        <Image
          source={require('../../assets/images/class.png')}
          style={{
            height: '123%',
            width: '122%',
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
