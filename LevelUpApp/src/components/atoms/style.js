import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
import globalStyle from '../../styles/globalStyle';
import {scaleSize, verticalScale} from '../../styles/mixins';

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  //Input
  inputName:
    (globalStyle.poppinsFont4,
    {color: colors.lightDark, paddingLeft: 5, paddingBottom: '1%'}),
  inputView: {
    height: scaleSize(46),
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: scaleSize(12),
    alignItems: 'center',
    paddingLeft: '2.5%',
    paddingRight: '2.5%',
    marginTop: '2.5%',
    borderColor: colors.GRAY_LIGHT,
    justifyContent: 'space-between',
  },
  input: [globalStyle.poppinsFont4, {flex: 0.9}],
  inputIcon: {flex: 0.1},
  socialIcon: {
    width: scaleSize(20),
    height: verticalScale(20),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginRight: 10,
  },
  backButtonView: {
    width: scaleSize(24),
    height: scaleSize(24),
    borderRadius: scaleSize(8),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY,
  },
  appbar: {
    flex: 0.025,
    padding: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.GRAY_LIGHT,
  },
  appbarTitle: [globalStyle.poppinsFont2, {color: colors.BLACK, flex: 1}],
});
export default style;
