import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../../styles/colors';
import globalStyle from '../../../../styles/globalStyle';

const style = StyleSheet.create({
  main: {
    backgroundColor: colors.WHITE,
    height: Dimensions.get('screen').height,
  },
  workouts: {
    paddingLeft: '5%',
    paddingTop: '2.5%',
    paddingRight: 0,
    flex: 0.145,
  },
  topTitle: [
    globalStyle.poppinsFont7,
    {color: colors.BLUE, marginBottom: '5%'},
  ],
  classesView: {
    flex: 0.45,
    padding: '2.5%',
    paddingBottom: 0,
    paddingTop: 0,
  },
  classHeader: {
    flexDirection: 'row',
    paddingLeft: '2.5%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trainersView: {
    padding: '2.5%',
    paddingBottom: 0,
    paddingTop: 0,
    flex: 0.3,
  },
  simpleTitle: [globalStyle.poppinsBold16, {color: colors.gray}],
  seeAllTxt: [globalStyle.poppinsFont3, {color: colors.BLUE, lineHeight: 18}],
});
export default style;
