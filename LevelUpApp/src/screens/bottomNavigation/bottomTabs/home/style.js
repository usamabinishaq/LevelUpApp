import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../../styles/colors';
import globalStyle from '../../../../styles/globalStyle';
import {
  scaleFont,
  scaleSize,
  verticalScale,
  window,
} from '../../../../styles/mixins';
import {
  NUNITO_SEMI_BOLD,
  POPPINS_BOLD,
  POPPINS_MEDIUM,
} from '../../../../styles/typography';

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.WHITE,
    height: window.height,
  },
  mainScroll: {flex: 0.95, width: '100%', alignSelf: 'center'},
  workouts: {
    paddingVertical: '2.5%',
    flex: 0.13,
  },
  topTitle: [
    globalStyle.poppinsFont7,
    {color: colors.BLUE, marginBottom: '2.5%', paddingHorizontal: '5%'},
  ],
  classesView: {
    flex: 0.5,
    justifyContent: 'center',
  },
  classHeader: {
    flexDirection: 'row',
    paddingTop: '2.5%',
    paddingLeft: '5%',
    paddingRight: '2.5%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trainersView: {
    flex: 0.37,
    paddingBottom: 0,
    paddingTop: 0,
  },
  simpleTitle: [globalStyle.poppinsBold16, {color: colors.gray}],
  seeAllTxt: [globalStyle.poppinsFont3, {color: colors.BLUE, lineHeight: 18}],

  /* { Spa } */
  spaCategoryContainer: {
    height: 70,
    width: 96,

    alignItems: 'center',
    margin: '3%',
    borderRadius: 8,
  },
  spaCategoryImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    margin: '5%',
  },
  spaCategoryTitle: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: scaleFont(12.5),

    textAlign: 'center',
    padding: '2.5%',
    width: '70%',
  },
  spaListContainer: {
    justifyContent: 'flex-end',
    marginHorizontal: 10,
    height: scaleSize(245),
    width: scaleSize(175),
    borderRadius: verticalScale(12),
    backgroundColor: colors.lightDark,
    // transform: [{translateY}],
  },
  spaListImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  spaListName: {
    fontSize: 12,
    fontFamily: POPPINS_BOLD,
    color: colors.WHITE,
    elevation: 5,
    shadowColor: colors.GRAY_DARK,
  },
  spaListInformationBtn: {
    backgroundColor: colors.WHITE,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%',
    borderRadius: verticalScale(6),
  },
  spaListInformationTitle: {
    fontFamily: NUNITO_SEMI_BOLD,
    fontSize: 12.5,
    color: colors.BLACK,
    paddingVertical: '2.5%',
    paddingHorizontal: '7.5%',
  },
});
export default style;
