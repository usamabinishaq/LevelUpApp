import React, {useState} from 'react';
import {Dimensions, Image, TouchableOpacity, View, Text} from 'react-native';
import Appbar from '../../components/appbar/appbar';
import Button from '../../components/atoms/buttons/button';
import {CalendarComponent} from '../../components/calender/calendar';
import {colors} from '../../styles/colors';
import {NUNITO_BOLD, NUNITO_REGULAR} from '../../styles/typography';

export default function SingleClass({navigation}) {
  const [selectedTime, setSelectedTime] = useState(0);

  return (
    <View style={{flex: 1, backgroundColor: colors.WHITE}}>
      <Appbar title={'Our Class'} />
      <View style={{flex: 0.95, marginTop: '2.5%'}}>
        <View
          style={{
            flex: 0.8,
            backgroundColor: colors.calendarBackground,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}>
          <CalendarComponent />
          <Text
            style={{
              fontFamily: NUNITO_BOLD,
              fontSize: 16,
              color: colors.purple,
              marginHorizontal: '5%',
              marginVertical: '2.5%',
            }}>
            Time
          </Text>
          <View
            style={{flexDirection: 'row', flexWrap: 'wrap', marginLeft: '5%'}}>
            {['10:00 am', '11:00 am', '2:00 pm', '3:00 pm'].map(
              (item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setSelectedTime(index);
                    }}
                    style={{
                      borderRadius: 10,
                      alignSelf: 'flex-start',
                      borderWidth: 1,
                      borderColor:
                        index == selectedTime ? colors.PRIMARY : colors.purple,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginHorizontal: '1%',
                      backgroundColor:
                        index == selectedTime ? colors.PRIMARY : null,
                    }}>
                    <Text
                      style={{
                        fontFamily: NUNITO_REGULAR,
                        fontSize: 14,
                        color:
                          index == selectedTime ? colors.WHITE : colors.purple,
                        padding: '2.5%',
                      }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              },
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: '5%',
              marginVertical: '3.5%',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 5,
                  width: 5,
                  borderRadius: 5 / 2,
                  backgroundColor: colors.purple,
                }}
              />
              <Text
                style={{
                  fontFamily: NUNITO_REGULAR,
                  fontSize: 12,
                  color: colors.purple,
                  paddingHorizontal: '2.5%',
                }}>
                Available
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 5,
                  width: 5,
                  borderRadius: 5 / 2,
                  backgroundColor: colors.GRAY_LIGHT,
                }}
              />
              <Text
                style={{
                  fontFamily: NUNITO_REGULAR,
                  fontSize: 12,
                  color: colors.purple,
                  paddingHorizontal: '2.5%',
                }}>
                Not Available
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 5,
                  width: 5,
                  borderRadius: 5 / 2,
                  backgroundColor: colors.PRIMARY,
                }}
              />
              <Text
                style={{
                  fontFamily: NUNITO_REGULAR,
                  fontSize: 12,
                  color: colors.purple,
                  paddingHorizontal: '2.5%',
                }}>
                Selected
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button name={'Book'} action={'Payment'} />
        </View>
      </View>
    </View>
  );
}
