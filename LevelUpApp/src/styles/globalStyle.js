import {StyleSheet} from 'react-native';
import {colors} from './colors';
import {scaleSize, verticalScale} from './mixins';
import {SCALE_12} from './spacing';
import {
  FONT_12,
  FONT_14,
  FONT_16,
  FONT_18,
  FONT_24,
  LINE_HEIGHT_16,
  LINE_HEIGHT_20,
  LINE_HEIGHT_24,
  LINE_HEIGHT_36,
  NUNITO_BOLD,
  NUNITO_EXTRA_BOLD,
  NUNITO_REGULAR,
  POPPINS_BOLD,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
} from './typography';

const globalStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: scaleSize(335),
    height: verticalScale(48),
    borderRadius: SCALE_12,
    backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButton: {
    width: scaleSize(335),
    height: verticalScale(48),
    borderRadius: SCALE_12,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.GRAY_LIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: '5%',
  },
  poppinsFont1: {
    fontFamily: POPPINS_BOLD,
    fontSize: FONT_18,
    textAlign: 'center',
    color: colors.WHITE,
    lineHeight: LINE_HEIGHT_24,
  },
  poppinsFont2: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_18,
    textAlign: 'center',
    lineHeight: LINE_HEIGHT_24,
  },
  poppinsFont3: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_14,
    textAlign: 'center',
    lineHeight: LINE_HEIGHT_24,
  },
  poppinsFont4: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_14,
    textAlign: 'left',
    lineHeight: LINE_HEIGHT_16,
  },
  poppinsFont6: {
    fontFamily: POPPINS_REGULAR,
    fontSize: FONT_18,
    textAlign: 'left',
    lineHeight: LINE_HEIGHT_24,
  },
  nunitoFont1: {
    fontFamily: NUNITO_EXTRA_BOLD,
    fontSize: FONT_24,
    color: colors.LightBlue,
    lineHeight: LINE_HEIGHT_36,
    textAlignVertical: 'top',
    letterSpacing: scaleSize(2.5),
  },
  nunitoFont3: {
    fontFamily: NUNITO_REGULAR,
    fontSize: FONT_16,
    textAlign: 'center',
    lineHeight: LINE_HEIGHT_24,
  },
  poppinsFont5: {
    fontFamily: NUNITO_REGULAR,
    fontSize: FONT_14,
    letterSpacing: scaleSize(0.5),
  },
});
export default globalStyle;
