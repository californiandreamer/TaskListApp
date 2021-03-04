import {StyleSheet} from 'react-native';
import {COLOR_GRAY, COLOR_WHITE} from '../../values/colors';

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
});
