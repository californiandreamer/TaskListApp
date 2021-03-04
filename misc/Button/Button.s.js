import {StyleSheet} from 'react-native';
import {COLOR_BLUE} from '../../values/colors';

export default StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    position: 'absolute',
    right: 20,
    bottom: 20,
    zIndex: 1,
  },
  button: {
    width: '100%',
    height: '100%',
    padding: 20,
    borderRadius: 50,
    backgroundColor: COLOR_BLUE,
    elevation: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
