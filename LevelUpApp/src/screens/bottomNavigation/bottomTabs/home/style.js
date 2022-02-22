import {StyleSheet} from 'react-native';
import {colors} from '../../../../styles/colors';
import globalStyle from '../../../../styles/globalStyle';

const style = StyleSheet.create({
  main: {backgroundColor: colors.WHITE, flex: 1},
  workouts: {
    padding: '2.5%',
    paddingTop: '5%',
    flex: 0.15,
  },
  topTitle: [globalStyle.poppinsFont7, {color: colors.BLUE}],
});
export default style;
