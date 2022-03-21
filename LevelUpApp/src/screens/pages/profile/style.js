import {StyleSheet} from 'react-native';
import {colors} from '../../../styles/colors';
import {NUNITO_BOLD, NUNITO_SEMI_BOLD} from '../../../styles/typography';
export default style = StyleSheet.create({
  mainSafeArea: {flex: 1, backgroundColor: colors.WHITE},
  imageContainer: {
    flex: 0.2,
    alignItems: 'center',
    marginVertical: '5%',
    borderColor: colors.GRAY_LIGHT,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60 / 5,
  },
  name: {
    fontFamily: NUNITO_BOLD,
    fontSize: 14,
    color: colors.BLUE,
    padding: '2.5%',
    letterSpacing: 0.25,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '2.5%',
    paddingHorizontal: '2.5%',
    marginVertical: '2.5%',
    borderRadius: 5,
  },
  contentTitle: {
    fontFamily: NUNITO_SEMI_BOLD,
    fontSize: 12.5,
    color: colors.BLUE,
    paddingHorizontal: '5%',
  },
});
