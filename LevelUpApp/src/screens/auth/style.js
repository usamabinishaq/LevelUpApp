import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
import globalStyle from '../../styles/globalStyle';
import {scaleSize, verticalScale} from '../../styles/mixins';
import {
  FONT_24,
  LINE_HEIGHT_36,
  NUNITO_BOLD,
  POPPINS_BOLD,
} from '../../styles/typography';

const style = StyleSheet.create({
  //login
  main: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  topImageView: {
    flex: 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
  },
  logo: {
    width: '100%',
    height: verticalScale(36.86),
    resizeMode: 'contain',
  },
  contentView: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: globalStyle.nunitoFont1,
  quoteText: [
    globalStyle.poppinsFont3,
    {
      color: colors.LightBlue,
      letterSpacing: scaleSize(1.25),
      width: '58%',
      paddingTop: '2.5%',
    },
  ],
  formView: {
    flex: 0.52,
    padding: '5%',
  },
  forgetView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '3.5%',
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  checkboxText: [globalStyle.poppinsFont5, {color: colors.silverBlue}],
  forgetText: [globalStyle.poppinsFont5, {color: colors.ALERT}],
  orView: {
    marginTop: '10%',
    borderTopWidth: 1,
    borderColor: colors.GRAY_LIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orText: [
    globalStyle.poppinsFont5,
    {
      color: colors.silverBlue,
      bottom: '50%',
      textAlign: 'center',
      backgroundColor: colors.WHITE,
      width: 35,
    },
  ],
  socialButtonsView: {
    flex: 0.28,
    paddingTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: [globalStyle.nunitoFont3, {color: colors.BLUE}],
  bottomText2: {color: colors.BLACK, fontFamily: NUNITO_BOLD},
  signupBody: {flex: 0.95, padding: '5%'},
  signupContentView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 2.5,
    paddingBottom: 0,
  },
  signupTitle: [
    globalStyle.poppinsFont1,
    {
      fontSize: FONT_24,
      lineHeight: LINE_HEIGHT_36,
      color: colors.LightBlue,
    },
  ],
  signupDescription: [
    globalStyle.poppinsFont6,
    {color: colors.LightBlue, width: '100%', paddingTop: '2.5%'},
  ],
  signupFormView: {flex: 0.8},
  signupAgreementText: [
    globalStyle.poppinsFont3,
    {
      paddingTop: '2.5%',
      paddingBottom: '2.5%',
      color: colors.LightBlue,
      width: '90%',
      alignSelf: 'center',
    },
  ],
  otpForm: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpHeading: [globalStyle.poppinsFont4, {color: colors.lightDark}],
  otpIsCorrect: {
    height: scaleSize(67),
    width: scaleSize(67),
    borderRadius: scaleSize(67 / 2),
    borderColor: colors.BLUE,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default style;
