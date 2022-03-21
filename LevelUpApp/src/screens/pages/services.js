import React, {useState} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Appbar from '../../components/appbar/appbar';
import Button from '../../components/atoms/buttons/button';
import {colors} from '../../styles/colors';
import globalStyle from '../../styles/globalStyle';
import style from './style';

const Services = (props, navigation) => {
  const [checked, setChecked] = useState('gym');
  return (
    <View style={style.main}>
      <StatusBar
        hidden={false}
        backgroundColor={colors.WHITE}
        barStyle="dark-content"
      />
      <Appbar title={'Services'} />
      <View style={style.servicesBody}>
        <View style={[style.servicesContentView]}>
          <Text style={style.servicesTitle}>{`Select`}</Text>
          <TouchableOpacity
            onPress={() => {
              setChecked('gym');
            }}
            style={
              checked == 'gym'
                ? globalStyle.selectedRadioButton
                : globalStyle.radioButton
            }>
            <Text
              style={[
                globalStyle.poppinsFont1,
                checked == 'gym' ? null : {color: colors.GRAY_DARK},
              ]}>
              {'Gym'}
            </Text>
            <Icon
              name={
                checked == 'gym'
                  ? 'checkbox-marked-circle'
                  : 'checkbox-blank-circle-outline'
              }
              size={22}
              color={checked == 'gym' ? colors.WHITE : colors.GRAY_DARK}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setChecked('spa');
            }}
            style={
              checked == 'spa'
                ? globalStyle.selectedRadioButton
                : globalStyle.radioButton
            }>
            <Text
              style={[
                globalStyle.poppinsFont1,
                checked == 'spa' ? null : {color: colors.GRAY_DARK},
              ]}>
              {'Spa'}
            </Text>
            <Icon
              name={
                checked == 'spa'
                  ? 'checkbox-marked-circle'
                  : 'checkbox-blank-circle-outline'
              }
              size={22}
              color={checked == 'spa' ? colors.WHITE : colors.GRAY_DARK}
            />
          </TouchableOpacity>
        </View>
        <View style={style.button}>
          <Button
            name={'Continue'}
            action={'BottomTabs'}
            message={'Selecting best workouts for you…'}
            params={checked}
          />
        </View>
      </View>
    </View>
  );
};
export default Services;
