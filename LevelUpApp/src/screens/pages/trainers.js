import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Appbar from '../../components/appbar/appbar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RoundedTabItem from '../../components/atoms/tabButtons/RoundedTabItem';
import {trainers, trainersCategory} from '../../services/dummy';
import {colors} from '../../styles/colors';
import {scaleFont, verticalScale, window} from '../../styles/mixins';

import style from './style';
import {
  LINE_HEIGHT_20,
  LINE_HEIGHT_24,
  NUNITO_REGULAR,
  NUNITO_SEMI_BOLD,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
} from '../../styles/typography';

export default function Trainers(props, navigation) {
  const [categories, setCategories] = useState(trainersCategory);
  const [selected, setSelected] = useState({
    position: 0,
    category: categories[0].title,
  });
  const [getTrainers, setTrainers] = useState(trainers);
  const [modal, setModal] = useState(false);
  const [singleTrainer, setSingleTrainer] = useState(trainers[0]);

  const setSelectedTab = val => {
    setSelected({position: val.pos, category: val.cat});
    setTrainers(
      val.cat != 'Show All Coaches'
        ? getTrainers.filter(function (item) {
            return item.category == val.cat;
          })
        : trainers,
    );
  };

  const renderTrainers = item => {
    return (
      <TouchableOpacity
        style={style.trainersListView}
        activeOpacity={0.9}
        onPress={() => {
          setSingleTrainer(item);
          setModal(true);
        }}>
        <Image source={item.img} style={style.trainersListImage} />
        <Text style={style.trainersListTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  const renderModal = item => {
    let rating = [];
    for (var i = 1; i <= item.rating; i++) {
      rating.push(i.toString());
    }
    return (
      <Modal isVisible={modal}>
        <View
          style={{
            alignSelf: 'center',
            borderRadius: verticalScale(12),
            backgroundColor: colors.PRIMARY,
          }}>
          <Icon
            name={'close-circle'}
            size={20}
            color={colors.WHITE}
            style={{
              alignSelf: 'flex-end',
              paddingHorizontal: '2.5%',
              paddingTop: '2.5%',
            }}
            onPress={() => {
              setModal(false);
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              flex: 0.3,
            }}>
            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={item.img}
                style={{
                  width: '70%',
                  height: '65%',
                  resizeMode: 'cover',
                  borderRadius: verticalScale(12),
                  borderWidth: 2.5,
                  borderColor: colors.WHITE,
                }}
              />
            </View>

            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: POPPINS_MEDIUM,
                  fontSize: 16.5,
                  color: colors.WHITE,
                  lineHeight: 24,
                  letterSpacing: 0.22,
                }}>
                {item.title}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-start',
                  alignItems: 'center',
                  marginVertical: '2.5%',
                }}>
                <Text
                  style={{
                    fontFamily: NUNITO_REGULAR,
                    fontSize: 12,
                    color: colors.WHITE,
                    paddingRight: '5%',
                  }}>{`Age: ${item.age}`}</Text>
                <Text
                  style={{
                    fontFamily: NUNITO_REGULAR,
                    fontSize: 12,
                    color: colors.WHITE,
                    paddingLeft: '5%',
                  }}>{`Height: ${item.height} cm`}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-start',
                  alignItems: 'center',
                  marginVertical: '2.5%',
                }}>
                <Text
                  style={{
                    fontFamily: NUNITO_REGULAR,
                    fontSize: 12,
                    color: colors.WHITE,
                    paddingRight: '5%',
                  }}>{`Rating:`}</Text>
                {rating.map((item, index) => {
                  return (
                    <Icon
                      key={index}
                      name={'star'}
                      color={colors.RATING}
                      size={15}
                    />
                  );
                })}
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 0.3,
              alignItems: 'center',
              marginHorizontal: '2.5%',
            }}>
            <Text
              style={{
                fontFamily: POPPINS_MEDIUM,
                fontSize: 16.5,
                color: colors.WHITE,
              }}>{`Description`}</Text>
            <Text
              numberOfLines={5}
              style={{
                fontFamily: NUNITO_REGULAR,
                fontSize: 12,
                letterSpacing: 0.25,
                lineHeight: LINE_HEIGHT_24,
                color: colors.WHITE,
                textAlign: 'center',
              }}>
              {item.description}
            </Text>
          </View>
          <View style={{flex: 0.4, alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: POPPINS_MEDIUM,
                fontSize: 14,
                color: colors.WHITE,
              }}>{`Specialised In`}</Text>
            <ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  width: '100%',
                  justifyContent: 'center',
                }}>
                {item.specialised.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        width: window.width / 2 - 40,
                        backgroundColor: colors.WHITE,
                        height: 35,
                        margin: 10,
                        borderRadius: verticalScale(10),
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontFamily: POPPINS_REGULAR,
                          fontSize: 11,
                          color: colors.BLUE,
                        }}>
                        {item}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={style.trainerSafeArea}>
      <Appbar title={'Our Trainers'} />
      <View style={{flex: 0.95}}>
        {renderModal(singleTrainer)}
        <View style={style.trainersTopView}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories.map((item, index) => {
              return (
                <RoundedTabItem
                  data={{tab: item, position: selected.position, index: index}}
                  key={index}
                  callback={setSelectedTab}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={{flex: 0.925}}>
          <FlatList
            contentContainerStyle={{
              alignSelf: 'center',
            }}
            data={getTrainers}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => renderTrainers(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
