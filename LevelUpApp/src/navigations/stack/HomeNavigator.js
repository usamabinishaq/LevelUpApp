/* {default Imports} */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogBox} from 'react-native';

/* {navigation Ref} */
import {navigationRef} from '../RootNavigation';

/* {Components Imports} */
import Home from '../../screens/bottomNavigation/bottomTabs/home/home';
import AllClasses from '../../screens/pages/allClasses';
import SingleClass from '../../screens/pages/singleClass';
import Trainers from '../../screens/pages/trainers';
import SpaDetail from '../../screens/pages/spaDetail';
import Payment from '../../screens/pages/payment';

const Stack = createNativeStackNavigator();

/* {Components Stack} */
let screens = [
  {name: 'Home', comp: Home},
  {name: 'AllClasses', comp: AllClasses},
  {name: 'SingleClass', comp: SingleClass},
  {name: 'Trainers', comp: Trainers},
  {name: 'SpaDetail', comp: SpaDetail},
  {name: 'Payment', comp: Payment},
];

const HomeStackNavigator = ({route}) => {
  let service = route.params ? route.params.service : '';
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {screens.map((screen, index) => {
        return (
          <Stack.Screen
            key={index}
            name={`${screen.name}`}
            component={screen.comp}
            initialParams={screen.name == 'Home' ? {service: service} : ''}
          />
        );
      })}
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
