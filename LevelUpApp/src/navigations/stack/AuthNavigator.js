import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogBox} from 'react-native';
import OnBoarding from '../../screens/getStarted/onBoarding';
import Signin from '../../screens/auth/Signin';
import Signup from '../../screens/auth/Signup';
import OTP from '../../screens/auth/OTP';
import Services from '../../screens/pages/services';
import {navigationRef} from '../RootNavigation';
import Progress from '../../screens/getStarted/progress';
import DrawerNavigation from '../DrawerNavigation';

const Stack = createNativeStackNavigator();

let screens = [
  {name: 'OnBoarding', comp: OnBoarding},
  {name: 'Signin', comp: Signin},
  {name: 'Signup', comp: Signup},
  {name: 'OTP', comp: OTP},
  {name: 'Services', comp: Services},
  {name: 'Progress', comp: Progress},
  {name: 'Drawer', comp: DrawerNavigation},
];
const AuthNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {screens.map((screen, index) => {
          return (
            <Stack.Screen
              key={index}
              name={`${screen.name}`}
              component={screen.comp}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AuthNavigator;
