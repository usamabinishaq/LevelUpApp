import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Text,
} from 'react-native';
import Appbar from '../../components/appbar/appbar';
import RoundedTabItem from '../../components/atoms/tabButtons/RoundedTabItem';
import {trainers, trainersCategory} from '../../services/dummy';

import style from './style';

export default function Trainers(props, navigation) {
  const [categories, setCategories] = useState(trainersCategory);
  const [selected, setSelected] = useState({
    position: 0,
    category: categories[0].title,
  });
  const [getTrainers, setTrainers] = useState(trainers);

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
      <View style={style.trainersListView}>
        <Image source={item.img} style={style.trainersListImage} />
        <Text style={style.trainersListTitle}>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={style.trainerSafeArea}>
      <Appbar title={'Our Trainers'} />
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
        <View style={{flex: 0.925}}>
          <FlatList
            data={getTrainers}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => renderTrainers(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
