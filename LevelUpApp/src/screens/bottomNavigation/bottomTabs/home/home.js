import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Appbar from '../../../../components/appbar/appbar';
import RoundedTabItem from '../../../../components/atoms/tabButtons/RoundedTabItem';
import ClassesView from '../../../../components/atoms/views/classesView';
import {classes, workouts} from '../../../../services/dummy';
import {Images} from '../../../../services/images';
import {colors} from '../../../../styles/colors';
import globalStyle from '../../../../styles/globalStyle';
import {scaleSize} from '../../../../styles/mixins';
import {FONT_20, FONT_22, FONT_24} from '../../../../styles/typography';
import style from './style';
const Home = (props, navigation) => {
  const [selectedWorkout, setSelectedWorkout] = useState(false);
  return (
    <SafeAreaView style={style.main}>
      {/* {APPBAR} */}
      <Appbar name={'home'} />

      <View style={{flex: 0.9}}>
        {/* {WORKOUTS TABS} */}

        <View style={style.workouts}>
          <Text style={style.topTitle}>Workouts</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {workouts.map((item, index) => {
              return <RoundedTabItem tab={item} key={index} />;
            })}
          </ScrollView>
        </View>

        {/* {CLASSES} */}

        <View style={style.classesView}>
          <View style={style.classHeader}>
            <Text style={style.simpleTitle}>Our Classes</Text>
            <Text style={style.seeAllTxt}>See All</Text>
          </View>
          {/* <FlatList
            data={classes}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return <ClassesView class={item} key={index} />;
            }}
          /> */}
          <View style={{flexDirection: 'row'}}>
            <ClassesView class={classes[0]} />
            <ClassesView class={classes[1]} />
          </View>
        </View>
        <View style={style.trainersView}>
          <View style={style.classHeader}>
            <Text style={style.simpleTitle}>Our Trainers</Text>
            <Text style={style.seeAllTxt}>See All</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: scaleSize(180),
                alignSelf: 'flex-start',
                borderRadius: scaleSize(12),
                marginLeft: '2.5%',
                marginRight: '2.5%',
              }}>
              <Image
                source={Images.trainer}
                style={{
                  height: '65%',
                  width: '100%',
                  borderRadius: scaleSize(12),
                  resizeMode: 'cover',
                }}
              />
              <Text
                style={[
                  globalStyle.poppinsBold12,
                  {
                    lineHeight: 18,
                    color: colors.PRIMARY,
                    paddingBottom: '1%',
                    paddingTop: '2.5%',
                    padding: '2.5%',
                  },
                ]}>
                Coach Gazalla
              </Text>
              <Text
                style={[
                  globalStyle.poppinsRegular9,
                  {
                    lineHeight: 14,
                    color: colors.BLACK,
                    opacity: 0.7,
                    paddingLeft: '2.5%',
                  },
                ]}>
                Swimming Specialist
              </Text>
            </View>
            <View
              style={{
                width: scaleSize(180),
                alignSelf: 'flex-start',
                borderRadius: scaleSize(12),
                marginLeft: '2.5%',
                marginRight: '2.5%',
              }}>
              <Image
                source={Images.trainer}
                style={{
                  height: '65%',
                  width: '100%',
                  borderRadius: scaleSize(12),
                  resizeMode: 'cover',
                }}
              />
              <Text
                style={[
                  globalStyle.poppinsBold12,
                  {
                    lineHeight: 18,
                    color: colors.PRIMARY,
                    paddingBottom: '1%',
                    paddingTop: '2.5%',
                    padding: '2.5%',
                  },
                ]}>
                Coach Gazalla
              </Text>
              <Text
                style={[
                  globalStyle.poppinsRegular9,
                  {
                    lineHeight: 14,
                    color: colors.BLACK,
                    opacity: 0.7,
                    paddingLeft: '2.5%',
                  },
                ]}>
                Swimming Specialist
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
