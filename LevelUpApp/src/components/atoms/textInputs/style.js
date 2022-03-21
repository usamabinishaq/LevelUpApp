import {StyleSheet} from 'react-native';
import {colors} from '../../../styles/colors';
import globalStyle from '../../../styles/globalStyle';
import {scaleSize, verticalScale} from '../../../styles/mixins';
import {NUNITO_BOLD, NUNITO_REGULAR} from '../../../styles/typography';

export default style = StyleSheet.create({
  //Input
  inputName: {
    fontFamily: NUNITO_BOLD,
    fontSize: 12,
    color: colors.BLACK,
    letterSpacing: 0.22,
  },
  simpleInput: {
    height: verticalScale(45),
    borderBottomWidth: 1,
    borderColor: colors.GRAY_LIGHT,
    fontFamily: NUNITO_REGULAR,
    fontSize: 14.5,
  },
});
