import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
import globalStyle from '../../styles/globalStyle';
import {scaleSize, verticalScale} from '../../styles/mixins';
import {LINE_HEIGHT_24} from '../../styles/typography';

let winWidth = Dimensions.get('window').width;
let winHeight = Dimensions.get('window').height;

const style = StyleSheet.create({
  //Splash
  topImage: {
    width: '100%',
    height: verticalScale(55.79),
    resizeMode: 'contain',
  },

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
  logo: {
    width: scaleSize(214.2),
    height: verticalScale(64.56),
    resizeMode: 'contain',
  },
  backgroundImage: {
    width: winWidth,
    height: winHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressView: {
    width: verticalScale(105),
    height: verticalScale(105),
    borderRadius: verticalScale(105),
    borderWidth: scaleSize(7.5),
    borderColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
  },
  loadingImage: {
    width: scaleSize(45),
    height: verticalScale(45),
    resizeMode: 'contain',
  },
  progressTitle: [
    globalStyle.poppinsFont4,
    {color: colors.WHITE, lineHeight: LINE_HEIGHT_24},
  ],
});
export default style;
