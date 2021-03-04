import {StyleSheet} from 'react-native';
import {
  COLOR_GRAY,
  COLOR_GREEN,
  COLOR_SILVER,
  COLOR_WHITE,
} from '../../values/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 8,
    backgroundColor: COLOR_WHITE,
  },
  wrapper: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLOR_GRAY,
  },
  item: {
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  inner: {
    width: '100%',
    borderWidth: 2,
    borderColor: COLOR_SILVER,
    borderRadius: 32,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLOR_GRAY,
  },
});
