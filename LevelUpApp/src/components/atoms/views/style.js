import {StyleSheet} from 'react-native';
import {colors} from '../../../styles/colors';
import globalStyle from '../../../styles/globalStyle';
import {scaleFont, scaleSize, verticalScale} from '../../../styles/mixins';

const style = StyleSheet.create({
  //Classes
  main: {
    alignSelf: 'flex-start',
    backgroundColor: colors.gray,
    width: scaleSize(180),
    borderRadius: scaleSize(12),
    marginHorizontal: 7.5,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  imageStyle: {borderRadius: scaleSize(12), opacity: 0.5},
  content: {
    opacity: 1,
    paddingLeft: '5%',
    alignSelf: 'flex-start',
    paddingBottom: '5%',
  },
  classTitle: [
    globalStyle.poppinsBold12,
    {
      lineHeight: 18,
      color: colors.WHITE,
      paddingBottom: '2%',
      paddingTop: '5%',
    },
  ],
  classTiming: [
    globalStyle.poppinsRegular9,
    {lineHeight: 13.5, color: colors.WHITE, opacity: 0.7},
  ],
  liveViewContainer: {
    alignSelf: 'flex-start',
    height: verticalScale(22),
    borderRadius: scaleSize(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY,
  },
  liveViewContent: [
    globalStyle.poppinsFont3,
    {
      fontWeight: '500',
      lineHeight: 18,
      paddingLeft: 10,
      paddingRight: 10,
      color: colors.WHITE,
    },
  ],

  //Trainers
  trainerView: {
    width: scaleSize(180),
    alignSelf: 'flex-start',
    borderRadius: scaleSize(12),
    marginHorizontal: 7.5,
    paddingBottom: 5,
  },
  trainerImage: {
    height: '75%',
    width: '100%',
    borderRadius: scaleSize(12),
    resizeMode: 'cover',
  },
  trainerTitle: [
    globalStyle.poppinsBold12,
    {
      lineHeight: 18,
      color: colors.PRIMARY,
      paddingBottom: '1%',
      padding: '2.5%',
    },
  ],
  trainerCategory: [
    globalStyle.poppinsRegular9,
    {
      lineHeight: 14,
      color: colors.BLACK,
      opacity: 0.7,
      paddingLeft: '2.5%',
    },
  ],
});
export default style;
