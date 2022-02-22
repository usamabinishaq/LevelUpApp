import React from 'react';
import {Text, View} from 'react-native';
import Appbar from '../../../../components/appbar/appbar';
import {FONT_20, FONT_22, FONT_24} from '../../../../styles/typography';
import style from './style';
const Home = ({}) => {
  return (
    <View style={style.main}>
      <Appbar name={'home'} />
      <View style={style.workouts}>
        <Text style={style.topTitle}>Workouts</Text>
      </View>
      <View style={{flex: 0.55, padding: '2.5%'}}>
        <Text style={style.topTitle}>Our Classes</Text>
      </View>
      <View style={{flex: 0.3, padding: '2.5%'}}>
        <Text style={style.topTitle}>Our Trainers</Text>
      </View>
    </View>
  );
};
export default Home;
