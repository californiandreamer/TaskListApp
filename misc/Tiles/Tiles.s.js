import {StyleSheet} from 'react-native';
import {COLOR_GRAY, COLOR_SILVER} from '../../values/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  tile: {
    width: '100%',
    padding: 8,
    borderBottomWidth: 2,
    borderColor: COLOR_SILVER,
  },
  inner: {
    width: '100%',
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLOR_GRAY,
  },
  input: {
    fontSize: 16,
    color: COLOR_GRAY,
  },
});
