import React, {useState} from 'react';
import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
import Appbar from '../../components/appbar/appbar';
import {colors} from '../../styles/colors';

export default function Massage(props, navigation) {
  const [change, setChange] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: colors.WHITE}}>
      <Appbar name={'Massage'} />
      <TouchableOpacity
        style={{flex: 0.9, alignItems: 'center'}}
        onPress={() => {
          setChange(true);
        }}>
        <Image
          source={
            change
              ? require('../../assets/images/singlemassage.png')
              : require('../../assets/images/massage.png')
          }
          style={{
            height: '113%',
            width: '110%',
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
