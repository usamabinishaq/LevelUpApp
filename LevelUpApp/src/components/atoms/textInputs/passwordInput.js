import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../styles/colors';
import style from '../style';
const PasswordInput = (props, navigation) => {
  const [show, setShow] = useState(false);
  return (
    <View style={{marginBottom: '3.5%'}}>
      <Text style={style.inputName}>{props.name}</Text>
      <View style={style.inputView}>
        <TextInput
          style={style.input}
          placeholder={props.placeholder}
          placeholderTextColor={colors.silverBlue}
          secureTextEntry={show ? false : true}
        />
        <Icon
          onPress={() => {
            show ? setShow(false) : setShow(true);
          }}
          name={show ? 'eye-outline' : 'eye-off-outline'}
          color={colors.BLUE}
          size={20}
          style={style.inputIcon}
        />
      </View>
    </View>
  );
};
export default PasswordInput;
