import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Appbar from '../../components/appbar/appbar';
import {colors} from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';
import {NUNITO_BOLD, NUNITO_REGULAR} from '../../styles/typography';
import Checkbox from '../../components/atoms/checkbox/checkbox';
import Input from '../../components/atoms/textInputs/input';
import SimpleInput from '../../components/atoms/textInputs/simpleInput';
import {verticalScale} from '../../styles/mixins';
import Button from '../../components/atoms/buttons/button';

export default function Payment(props, navigation) {
  let [checkbox, setCheckbox] = useState('first');

  const updateCheckbox = val => {
    setCheckbox(val);
  };
  return (
    <View style={style.trainerSafeArea}>
      <Appbar title={'Payment'} />
      <View style={{flex: 0.95}}>
        <View style={style.paymentHeader}>
          <Text style={style.paymentTopHeading}>{`Add your Card Details`}</Text>
          <Text style={style.paymentTitle}>
            Please Select and add your payment method
          </Text>
        </View>
        <View style={style.paymentCheckboxContainer}>
          <Checkbox
            name={'Credit Card'}
            value={'first'}
            callback={updateCheckbox}
            checked={checkbox}
          />
          <Checkbox
            name={'Paypal'}
            value={'second'}
            callback={updateCheckbox}
            checked={checkbox}
          />
          <Checkbox
            name={'Apple Pay'}
            value={'third'}
            callback={updateCheckbox}
            checked={checkbox}
          />
        </View>
        <View
          style={{
            flex: 0.45,
            marginHorizontal: '5%',
          }}>
          <SimpleInput name={'Holder Name'} placeholder={'Enter Name'} />
          <SimpleInput name={'Card Number'} placeholder={'Enter Card'} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flex: 0.5, marginRight: '5%'}}>
              <SimpleInput
                name={'Expiry date'}
                placeholder={'mm/yy'}
                length={5}
                inputType={'numeric'}
              />
            </View>

            <View style={{flex: 0.5, marginLeft: '5%'}}>
              <SimpleInput
                name={'CVV'}
                placeholder={'Enter CVV'}
                length={3}
                inputType={'numeric'}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button name={'Add'} />
        </View>
      </View>
    </View>
  );
}
