import React from 'react';
import {Text, View} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../styles/colors';

export default Checkbox = props => {
  return (
    <View style={style.checkboxContainer}>
      <Icon
        onPress={() => {
          props.callback(props.value);
        }}
        name={
          props.checked == props.value
            ? 'checkbox-marked-circle'
            : 'checkbox-blank-circle-outline'
        }
        size={26}
        color={colors.PRIMARY}
      />
      <Text style={style.checkboxText}>{`${props.name}`}</Text>
    </View>
  );
};
