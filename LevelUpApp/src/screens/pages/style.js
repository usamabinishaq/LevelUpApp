import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
import globalStyle from '../../styles/globalStyle';
import {FONT_24, LINE_HEIGHT_36} from '../../styles/typography';

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  servicesTitle: [
    globalStyle.poppinsFont1,
    {
      fontSize: FONT_24,
      lineHeight: LINE_HEIGHT_36,
      color: colors.LightBlue,
      marginBottom: '5%',
    },
  ],
  servicesBody: {flex: 0.95, padding: '5%'},
  servicesContentView: {
    flex: 0.5,
    alignItems: 'flex-start',
    padding: 2.5,
    paddingBottom: 0,
  },
  button: {flex: 0.5, justifyContent: 'flex-end'},
});
export default style;
