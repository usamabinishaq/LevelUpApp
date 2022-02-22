import React from 'react';
import {Text, View} from 'react-native';
import Appbar from '../../../../components/appbar/appbar';
const Message = ({}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <Appbar title={'Message'} />
    </View>
  );
};
export default Message;
