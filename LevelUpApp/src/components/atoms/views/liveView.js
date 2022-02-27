import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import style from './style';

const LiveView = props => {
  return (
    <TouchableOpacity style={[style.liveViewContainer]}>
      <Text style={[style.liveViewContent]}>{props.name}</Text>
    </TouchableOpacity>
  );
};
export default LiveView;
