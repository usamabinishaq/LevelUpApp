import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Animated,
} from 'react-native';
import Appbar from '../../../../components/appbar/appbar';
import RoundedTabItem from '../../../../components/atoms/tabButtons/RoundedTabItem';
import ClassesView from '../../../../components/atoms/views/classesView';
import {TrainerView} from '../../../../components/atoms/views/trainerView';
import {
  classes,
  spaList,
  spa_categories,
  trainers,
  workouts,
} from '../../../../services/dummy';
import {colors} from '../../../../styles/colors';
import {scaleFont, scaleSize, verticalScale} from '../../../../styles/mixins';
import {
  LINE_HEIGHT_16,
  NUNITO_REGULAR,
  NUNITO_SEMI_BOLD,
  POPPINS_BOLD,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
} from '../../../../styles/typography';
import style from './style';
const Home = ({route, navigation}) => {
  console.log(route);
  const [workout, setWorkouts] = useState(workouts);
  const [selected, setSelected] = useState(0);
  const [selectedSpa, setSelectedSpa] = useState(0);
  // const ScrollX = useRef(new Animated.Value(0)).current;

  const setSelectedTab = val => {
    setSelected(val.pos);
  };
  const setSpaCategory = val => {
    setSelectedSpa(val);
  };
  const renderSpaList = (item, index) => {
    // const inputRange = [
    //   (index - 2) * scaleSize(190),
    //   (index - 1) * scaleSize(190),
    //   index * scaleSize(190),
    // ];
    // const translateY = ScrollX.interpolate({
    //   inputRange,
    //   outputRange: [0, -25, 0],
    // });
    return (
      <View style={style.spaListContainer}>
        <ImageBackground
          key={index}
          source={item.img}
          style={style.spaListImage}
          imageStyle={{opacity: 1, borderRadius: verticalScale(12)}}>
          <Text style={style.spaListName}>{item.name}</Text>
          <TouchableOpacity
            style={style.spaListInformationBtn}
            onPress={() => {
              navigation.navigate('SpaDetail', {spa: item});
            }}>
            <Text style={style.spaListInformationTitle}>{`Information`}</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  };
  return (
    <SafeAreaView style={style.main}>
      {/* {APPBAR} */}
      <Appbar
        name={'home'}
        left={'ios-menu'}
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      {route.params.service == 'gym' ? (
        /*{GYM } */
        <View style={style.mainScroll}>
          {/* {WORKOUTS TABS} */}

          <View style={style.workouts}>
            <Text style={style.topTitle}>Workouts</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {workout.map((item, index) => {
                return (
                  <RoundedTabItem
                    data={{tab: item, position: selected, index: index}}
                    key={index}
                    callback={setSelectedTab}
                  />
                );
              })}
            </ScrollView>
          </View>

          {/* {CLASSES} */}

          <View style={style.classesView}>
            <View style={style.classHeader}>
              <Text style={style.simpleTitle}>Our Classes</Text>
              <Text
                onPress={() => {
                  navigation.navigate('AllClasses');
                }}
                style={style.seeAllTxt}>
                See All
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {classes.map((item, index) => {
                return <ClassesView class={item} key={index} />;
              })}
            </ScrollView>
          </View>
          <View style={style.trainersView}>
            <View style={style.classHeader}>
              <Text style={style.simpleTitle}>Our Trainers</Text>
              <Text
                onPress={() => {
                  navigation.navigate('Trainers');
                }}
                style={style.seeAllTxt}>
                See All
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {trainers.map((item, index) => {
                return <TrainerView trainer={item} key={index} />;
              })}
            </ScrollView>
          </View>
        </View>
      ) : (
        /*{ SPA} */
        <View style={style.mainScroll}>
          <View style={{flex: 0.6, paddingVertical: '2.5%'}}>
            <Text style={style.topTitle}>Featured</Text>
            <View style={{flex: 1}}>
              <FlatList
                horizontal={true}
                data={spaList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => renderSpaList(item, index)}
                snapToInterval={scaleSize(175 / 2)}
                decelerationRate={0}
                bounces={false}
                scrollEventThrottle={1}
              />
            </View>
          </View>
          <View style={{flex: 0.4, paddingVertical: '2.5%'}}>
            <Text style={style.topTitle}>Categories</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}>
                {spa_categories.map((item, index) => (
                  <SpaCategory
                    key={index}
                    data={{item: item, position: selectedSpa, index: index}}
                    callback={setSpaCategory}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
export default Home;

export const SpaCategory = props => {
  return (
    <TouchableOpacity
      style={[
        style.spaCategoryContainer,
        {
          backgroundColor:
            props.data.position == props.data.index
              ? colors.PRIMARY
              : colors.WHITE,
        },
      ]}
      onPress={() => {
        props.callback(props.data.index);
      }}>
      <Image
        source={
          props.data.position == props.data.index
            ? props.data.item.selectedIcon
            : props.data.item.icon
        }
        style={style.spaCategoryImage}
      />
      <Text
        style={[
          style.spaCategoryTitle,
          {
            color:
              props.data.position == props.data.index
                ? colors.WHITE
                : colors.tabColor,
          },
        ]}>
        {props.data.item.category}
      </Text>
    </TouchableOpacity>
  );
};
