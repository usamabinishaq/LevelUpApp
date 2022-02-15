import {StyleSheet} from 'react-native';
import colors from '../assets/color/colors';

const globalStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default globalStyle;
