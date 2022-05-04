import React from 'react';

import Splash from './src/screens/getStarted/Splash';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  return <Splash />;
};
export default App;
