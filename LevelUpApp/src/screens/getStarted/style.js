import {Dimensions, StyleSheet} from 'react-native';
import {scaleSize, verticalScale} from '../../styles/mixins';

let winWidth = Dimensions.get('window').width;
let winHeight = Dimensions.get('window').height;

const style = StyleSheet.create({
  // OnBoarding
  topView: {
    flex: 0.55,
    justifyContent: 'flex-end',
  },
  bottomView: {
    flex: 0.45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {width: scaleSize(175), height: verticalScale(52.75)},
  backgroundImage: {
    width: winWidth,
    height: winHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default style;
