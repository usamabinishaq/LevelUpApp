import React, {useEffect} from 'react';
import Text from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/getStarted/Splash';
import OnBoarding from './src/screens/getStarted/onBoarding';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import {LogBox} from 'react-native';
import {navigationRef} from './src/navigations/RootNavigation';
import OTP from './src/screens/auth/OTP';
import Progress from './src/screens/getStarted/progress';
import Services from './src/screens/pages/services';
import BottomTabs from './src/screens/bottomNavigation/bottomNavigation';
import Home from './src/screens/bottomNavigation/bottomTabs/home/home';
import Search from './src/screens/bottomNavigation/bottomTabs/search/search';
import Chart from './src/screens/bottomNavigation/bottomTabs/chart/chart';
import Message from './src/screens/bottomNavigation/bottomTabs/message/message';

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

let screens = [
  {name: 'Splash', comp: Splash},
  {name: 'OnBoarding', comp: OnBoarding},
  {name: 'Signup', comp: Signup},
  {name: 'Signin', comp: Signin},
  {name: 'OTP', comp: OTP},
  {name: 'Progress', comp: Progress},
  {name: 'Services', comp: Services},
  {name: 'BottomTabs', comp: BottomTabs},
  {name: 'Home', comp: Home},
  {name: 'Search', comp: Search},
  {name: 'Chart', comp: Chart},
  {name: 'Message', comp: Message},
];
const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {screens.map((screen, index) => {
          return (
            <Stack.Screen
              key={index}
              name={`${screen.name}`}
              component={screen.comp}
              options={{headerShown: false}}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
