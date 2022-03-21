import React from 'react';
import {Text, SafeAreaView, TouchableOpacity, View, Image} from 'react-native';
import Appbar from '../../../components/appbar/appbar';
import {Images} from '../../../services/images';
import {colors} from '../../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  NUNITO_BOLD,
  NUNITO_SEMI_BOLD,
  POPPINS_BOLD,
  POPPINS_MEDIUM,
} from '../../../styles/typography';
import style from './style';

export default Profile = ({navigation}) => {
  return (
    <SafeAreaView style={style.mainSafeArea}>
      <Appbar title={'Profile'} />
      <View style={style.imageContainer}>
        <Image source={Images.profile} style={style.image} />
        <Text style={style.name}>{`Maria Miller`}</Text>
      </View>
      <View style={{flex: 0.8, marginHorizontal: '5%'}}>
        <Content icon={'account'} title={'Personal Information'} />
        <Content icon={'cog'} title={'Settings'} />
        <Content icon={'credit-card'} title={'Billing Details'} />
        <Content icon={'logout'} title={'Logout'} />
      </View>
    </SafeAreaView>
  );
};

export const Content = props => {
  return (
    <View style={style.contentContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name={props.icon} color={colors.PRIMARY} size={20} />
        <Text style={style.contentTitle}>{props.title}</Text>
      </View>
      <Icon name={'chevron-right'} color={colors.BLUE} size={20} />
    </View>
  );
};
