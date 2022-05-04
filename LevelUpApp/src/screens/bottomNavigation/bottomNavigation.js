import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {useState} from 'react';
import Home from './bottomTabs/home/home';
import Search from './bottomTabs/search/search';
import Chart from './bottomTabs/chart/chart';
import Message from './bottomTabs/message/message';
import {Image, View} from 'react-native';
import {SelectedTabIcons, TabIcons} from '../../services/images';
import style from './style';
import HomeStackNavigator from '../../navigations/stack/HomeNavigator';

const Tab = createMaterialBottomTabNavigator();
const tabItems = [
  {
    name: 'HomeStackNavigator',
    comp: HomeStackNavigator,
    icon: TabIcons.home,
    selectedIcon: SelectedTabIcons.home,
  },
  {
    name: 'Search',
    comp: Search,
    icon: TabIcons.search,
    selectedIcon: SelectedTabIcons.search,
  },
  {
    name: 'Chart',
    comp: Chart,
    icon: TabIcons.chart,
    selectedIcon: SelectedTabIcons.chart,
  },
  {
    name: 'Message',
    comp: Message,
    icon: TabIcons.message,
    selectedIcon: SelectedTabIcons.message,
  },
];
export default function BottomTabs({route}) {
  let service = route.params ? route.params.service : '';
  console.log('BottomTabs: ' + service);
  return (
    <Tab.Navigator
      initialRouteName="HomeStackNavigator"
      labeled={false}
      barStyle={style.barStyle}>
      {tabItems.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.comp}
            initialParams={
              item.name == 'HomeStackNavigator' ? {service: service} : ''
            }
            options={{
              tabBarIcon: ({focused}) => (
                <View style={[style.tab, focused ? style.selectedTab : null]}>
                  <Image
                    source={focused ? item.selectedIcon : item.icon}
                    style={style.icon}
                  />
                </View>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
