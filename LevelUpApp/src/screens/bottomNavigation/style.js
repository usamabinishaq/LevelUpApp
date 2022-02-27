import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
import {scaleSize, verticalScale} from '../../styles/mixins';

const style = StyleSheet.create({
  barStyle: {
    backgroundColor: colors.WHITE,
    height: scaleSize(65),
    paddingHorizontal: '7.5%',
    justifyContent: 'center',
    elevation: 0,
  },
  tab: {
    width: verticalScale(38),
    height: verticalScale(38),
    borderRadius: verticalScale(8.5),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 5,
  },
  selectedTab: {backgroundColor: colors.PRIMARY},
  icon: {
    width: verticalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
});
export default style;
