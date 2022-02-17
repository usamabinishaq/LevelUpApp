import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/getStarted/Splash';
import OnBoarding from './src/screens/getStarted/onBoarding';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import {LogBox} from 'react-native';
import {navigationRef} from './src/navigations/RootNavigation';

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

let screens = [
  {name: 'Splash', comp: Splash},
  {name: 'OnBoarding', comp: OnBoarding},
  {name: 'Signup', comp: Signup},
  {name: 'Signin', comp: Signin},
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
