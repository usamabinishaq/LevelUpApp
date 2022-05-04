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
  ImageBackground,
} from 'react-native';
import Appbar from '../../components/appbar/appbar';
import RoundedTabItem from '../../components/atoms/tabButtons/RoundedTabItem';
import LiveView from '../../components/atoms/views/liveView';
import * as RootNavigation from '../../navigations/RootNavigation';

import {
  classCategory,
  classes,
  trainers,
  trainersCategory,
} from '../../services/dummy';
import style from './style';

export default function AllClasses(props, navigation) {
  const [categories, setCategories] = useState(classCategory);
  const [selected, setSelected] = useState({
    position: 0,
    category: categories[0].title,
  });
  const [getClasses, setClasses] = useState(classes);

  const setSelectedTab = val => {
    setSelected({position: val.pos, category: val.cat});

    // setClasses(
    //   val.cat != 'Show All Classes'
    //     ? getClasses.filter(function (item) {
    //         return item.category == val.cat;
    //       })
    //     : trainers,
    // );
  };

  const renderClasses = (props, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={style.classMain}
        onPress={() => {
          RootNavigation.navigate('SingleClass', {data: props.class});
        }}>
        <ImageBackground
          source={props.img}
          style={style.backgroundImage}
          imageStyle={style.imageStyle}
          resizeMode={'cover'}>
          <View style={style.content}>
            {props.isLive ? <LiveView name={'Live'} /> : null}
            <Text style={style.classTitle}>{props.title}</Text>
            <Text style={style.classTiming}>{props.timing}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={style.trainerSafeArea}>
      <Appbar title={'Our Classes'} />
      <View style={{flex: 0.95}}>
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
        <View
          style={{
            flex: 0.925,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FlatList
            data={getClasses}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => renderClasses(item, index)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
