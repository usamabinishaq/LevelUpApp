import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Images} from '../../../services/images';
import {colors} from '../../../styles/colors';
import globalStyle from '../../../styles/globalStyle';
import {scaleSize} from '../../../styles/mixins';
import style from './style';

export const TrainerView = props => {
  return (
    <TouchableOpacity style={style.trainerView}>
      <Image source={props.trainer.img} style={style.trainerImage} />
      <Text style={style.trainerTitle}>{props.trainer.title}</Text>
      <Text style={style.trainerCategory}>{props.trainer.category}</Text>
    </TouchableOpacity>
  );
};
