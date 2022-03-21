import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
import {scaleSize, verticalScale, window} from '../../styles/mixins';

const style = StyleSheet.create({
  barStyle: {
    width: window.width,
    height: verticalScale(75),
    paddingHorizontal: '7.5%',
    justifyContent: 'center',
    elevation: 0,
    backgroundColor: colors.WHITE,
  },
  tab: {
    width: verticalScale(38),
    height: verticalScale(38),
    borderRadius: verticalScale(8.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTab: {backgroundColor: colors.PRIMARY},
  icon: {
    width: verticalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
});
export default style;
