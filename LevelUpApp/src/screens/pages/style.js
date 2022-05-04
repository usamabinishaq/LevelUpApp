import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
import globalStyle from '../../styles/globalStyle';
import {scaleFont, scaleSize, verticalScale, window} from '../../styles/mixins';
import {
  FONT_24,
  LINE_HEIGHT_16,
  LINE_HEIGHT_24,
  LINE_HEIGHT_30,
  LINE_HEIGHT_36,
  NUNITO_REGULAR,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
} from '../../styles/typography';

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  servicesTitle: [
    globalStyle.poppinsFont1,
    {
      fontSize: FONT_24,
      lineHeight: LINE_HEIGHT_36,
      color: colors.LightBlue,
      marginBottom: '5%',
    },
  ],
  servicesBody: {flex: 0.95, padding: '5%'},
  servicesContentView: {
    flex: 0.5,
    alignItems: 'flex-start',
    padding: 2.5,
    paddingBottom: 0,
  },
  button: {flex: 0.5, justifyContent: 'flex-end'},

  /* { Trainers Screen } */

  trainerSafeArea: {flex: 1, backgroundColor: colors.WHITE},
  trainersTopView: {
    flex: 0.075,
    paddingVertical: '2.5%',
    width: '100%',
  },
  trainersListImage: {
    width: '100%',
    height: '90%',
    resizeMode: 'contain',
  },
  trainersListView: {
    width: scaleSize(150),
    height: verticalScale(150),
    margin: '2.5%',

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: verticalScale(12),
    borderWidth: 3.5,

    borderColor: colors.PRIMARY,
  },
  trainersListTitle: {
    fontFamily: POPPINS_MEDIUM,
    marginVertical: '5%',
    color: colors.BLACK,
    lineHeight: LINE_HEIGHT_30,
    fontSize: scaleFont(19),
    letterSpacing: 0.22,
  },

  /* {All Classes} */
  classMain: {
    alignSelf: 'flex-start',
    backgroundColor: colors.gray,
    width: window.width / 2.25,
    height: window.height / 3,
    borderRadius: scaleSize(12),
    marginHorizontal: 10,
    marginVertical: 10,
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
  //SpaDetail
  spaDetailTopTitle: [
    globalStyle.poppinsFont7,
    {color: colors.BLUE, paddingVertical: '2.5%', paddingHorizontal: '5%'},
  ],
  spaDetailMainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '5%',
  },
  spaDetailImage: {
    width: '80%',
    height: verticalScale(170),
    borderRadius: verticalScale(14),
  },
  spaDetailTitle: {
    fontFamily: POPPINS_MEDIUM,
    color: colors.BLACK,
    fontSize: 12.5,
    paddingTop: '5%',
    letterSpacing: 0.25,
  },
  spaDetailCategory: {
    fontFamily: POPPINS_REGULAR,
    color: colors.tabColor,
    fontSize: 10,
    letterSpacing: 1,
    lineHeight: LINE_HEIGHT_16,
    paddingBottom: '2.5%',
  },
  spaDetailDescription: {
    fontFamily: POPPINS_REGULAR,
    color: colors.gray,
    fontSize: 10,
    letterSpacing: 0.22,
    lineHeight: LINE_HEIGHT_24,
    textAlign: 'justify',
    margin: '5%',
    marginTop: '2.5%',
  },
  spaDetailPickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '90%',
    marginBottom: '5%',
  },
  spaDetailPickerTitle: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: 12,
    color: colors.BLACK,
    letterSpacing: 0.22,
    padding: 2.5,
  },
  spaDetailPicker: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaDetailPickerText: {
    fontFamily: NUNITO_REGULAR,
    fontSize: 12,
    color: colors.tabColor,
    paddingHorizontal: '5%',
  },
  //Payment
  paymentHeader: {
    flex: 0.15,
    paddingHorizontal: '5%',
    justifyContent: 'center',
    paddingVertical: '2.5%',
  },
  paymentTopHeading: [globalStyle.poppinsFont7, {color: colors.BLUE}],
  paymentTitle: {
    paddingVertical: '2.5%',
    width: '90%',
    fontFamily: POPPINS_REGULAR,
    fontSize: 14,
    color: colors.BLACK,
    lineHeight: LINE_HEIGHT_24,
  },
  paymentCheckboxContainer: {
    flex: 0.2,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginHorizontal: '2.5%',
    marginVertical: '2.5%',
    alignItems: 'center',
  },
});
export default style;
