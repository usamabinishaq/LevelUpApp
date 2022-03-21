import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Appbar from '../../components/appbar/appbar';
import {colors} from '../../styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import style from './style';
import Button from '../../components/atoms/buttons/button';
import {Modal} from 'react-native-paper';

export default function SpaDetail({route, navigation}) {
  let [spa, setSpa] = useState(route.params.spa);
  //date
  const [date, setDate] = useState(new Date());
  //date picker
  const [open, setOpen] = useState(false);
  return (
    <View style={style.trainerSafeArea}>
      {/* {APPBAR} */}
      <Appbar name={'spaDetail'} />
      <ScrollView style={{flex: 0.95}}>
        <Text style={style.spaDetailTopTitle}>{spa.category}</Text>
        <View style={style.spaDetailMainContainer}>
          {/* {Content} */}
          <Image source={spa.img} style={style.spaDetailImage} />
          <Text style={style.spaDetailTitle}>{spa.name}</Text>
          <Text style={style.spaDetailCategory}>{spa.category}</Text>
          <Text style={style.spaDetailDescription}>{spa.description}</Text>

          {/* { Pickers } */}
          <View style={style.spaDetailPickerContainer}>
            {/**{ Date Picker}**/}
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={style.spaDetailPickerTitle}>Choose Date</Text>
              <DatePicker
                modal
                open={open}
                date={date}
                minimumDate={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
                mode={'date'}
                title={'Choose Date'}
                textColor={colors.tabColor}
              />
              <TouchableOpacity
                style={style.spaDetailPicker}
                onPress={() => {
                  setOpen(true);
                }}>
                <Icon name={'calendar'} size={20} color={colors.PRIMARY} />
                <Text
                  style={
                    style.spaDetailPickerText
                  }>{`${date.toLocaleDateString()}`}</Text>
                <Icon name={'chevron-down'} size={20} color={colors.PRIMARY} />
              </TouchableOpacity>
            </View>

            {/* { Persons Picker}*/}
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={style.spaDetailPickerTitle}>Choose Persons</Text>
              <TouchableOpacity style={style.spaDetailPicker}>
                <Icon name={'users'} size={20} color={colors.PRIMARY} />
                <Text style={style.spaDetailPickerText}>{`2 Persons`}</Text>
                <Icon name={'chevron-down'} size={20} color={colors.PRIMARY} />
              </TouchableOpacity>
            </View>
          </View>
          {/*{ Next Button } */}
          <Button name={'Next'} action={'SingleClass'} />
        </View>
      </ScrollView>
    </View>
  );
}
