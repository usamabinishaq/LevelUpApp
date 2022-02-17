import {StyleSheet} from 'react-native';
import {colors} from './colors';
import {scaleSize, verticalScale} from './mixins';
import {SCALE_12} from './spacing';
import {
  FONT_16,
  FONT_18,
  LINE_HEIGHT_20,
  LINE_HEIGHT_24,
  POPPINS_BOLD,
  POPPINS_MEDIUM,
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
  font1: {
    fontFamily: POPPINS_BOLD,
    fontSize: FONT_18,
    textAlign: 'center',
    color: colors.WHITE,
    lineHeight: LINE_HEIGHT_24,
  },
  font2: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_18,
    textAlign: 'center',
    color: colors.WHITE,
    lineHeight: 24,
  },
  font3: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: FONT_16,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.5)',
    lineHeight: LINE_HEIGHT_24,
  },
});
export default globalStyle;
