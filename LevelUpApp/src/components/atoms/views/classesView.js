import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import LiveView from './liveView';
import style from './style';
import * as RootNavigation from '../../../navigations/RootNavigation';

const ClassesView = props => {
  return (
    <TouchableOpacity
      style={style.main}
      onPress={() => {
        RootNavigation.navigate('SingleClass', {data: props.class});
      }}>
      <ImageBackground
        source={props.class.img}
        style={style.backgroundImage}
        imageStyle={style.imageStyle}
        resizeMode={'cover'}>
        <View style={style.content}>
          {props.class.isLive ? <LiveView name={'Live'} /> : null}
          <Text style={style.classTitle}>{props.class.title}</Text>
          <Text style={style.classTiming}>{props.class.timing}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
export default ClassesView;
