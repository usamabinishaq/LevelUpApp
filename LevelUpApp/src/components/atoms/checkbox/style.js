import {StyleSheet} from 'react-native';
import {colors} from '../../../styles/colors';
import {window} from '../../../styles/mixins';
import {NUNITO_BOLD} from '../../../styles/typography';
export default style = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '2.5%',
    marginRight: '5%',
    marginHorizontal: '2.5%',
  },
  checkboxText: {
    fontFamily: NUNITO_BOLD,
    fontSize: 14,
    color: colors.BLACK,
    paddingHorizontal: '2.5%',
  },
});
