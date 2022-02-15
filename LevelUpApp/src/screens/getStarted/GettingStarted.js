import React, {useEffect} from 'react';
import {Component} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import colors from '../../assets/color/colors';
import globalStyle from '../../styles/globalStyle';

class GettingStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={globalStyle.mainContainer}>
        <StatusBar hidden />
        <View
          style={{
            flex: 0.5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/img4.png')}
            style={{width: '125%', height: '125%', resizeMode: 'contain'}}
          />
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 25,
                height: 5,
                backgroundColor: colors.white,
                borderRadius: 5,
                marginTop: '2.5%',
                marginRight: '1.5%',
              }}></View>
            <View
              style={{
                width: 5,
                height: 5,
                backgroundColor: colors.white,
                borderRadius: 5,
                marginTop: '2.5%',
                marginRight: '1.5%',
              }}></View>
            <View
              style={{
                width: 5,
                height: 5,
                backgroundColor: colors.white,
                borderRadius: 5,
                marginTop: '2.5%',
                marginRight: '1.5%',
              }}></View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                color: colors.white,
                textAlign: 'center',
                padding: '5%',
                paddingTop: '10%',
              }}>{`Mid-South Cosmetology And Barber Association is an Organization For Cosmetologists, Salons, Hairstylists, And Barbers.`}</Text>
          </View>
          <View
            style={{
              width: '90%',
              height: 45,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text style={{color: colors.white}}>Next</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default GettingStarted;
