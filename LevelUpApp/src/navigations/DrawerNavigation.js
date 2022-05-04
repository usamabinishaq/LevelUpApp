import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabs from '../screens/bottomNavigation/bottomNavigation';
import Home from '../screens/bottomNavigation/bottomTabs/home/home';
import Profile from '../screens/pages/profile/profile';
import Trainers from '../screens/pages/trainers';
const Drawer = createDrawerNavigator();

export default function DrawerNavigation({route}) {
  let service = route.params.service;
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={BottomTabs}
        initialParams={{service: service}}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Gym"
        component={BottomTabs}
        initialParams={{service: 'gym'}}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Spa"
        component={BottomTabs}
        initialParams={{service: 'spa'}}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Trainers"
        component={Trainers}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Your Order"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}
