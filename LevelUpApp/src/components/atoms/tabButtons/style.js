import {StyleSheet} from 'react-native';
import {colors} from '../../../styles/colors';
import globalStyle from '../../../styles/globalStyle';
import {scaleSize, verticalScale} from '../../../styles/mixins';

const style = StyleSheet.create({
  main: {
    height: verticalScale(32),
    borderRadius: scaleSize(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedText: [
    globalStyle.poppinsFont3,
    {
      fontWeight: '500',
      lineHeight: 18,
      paddingLeft: 10,
      paddingRight: 10,
      color: colors.WHITE,
    },
  ],
  text: [
    globalStyle.poppinsFont8,
    {
      color: colors.gray,
      paddingLeft: 10,
      paddingRight: 10,
    },
  ],
  selectedTab: {backgroundColor: colors.PRIMARY},
});
export default style;
