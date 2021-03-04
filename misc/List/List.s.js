import {StyleSheet} from 'react-native';
import {COLOR_GRAY, COLOR_GREEN, COLOR_SILVER} from '../../values/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 8,
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
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: '100%',
    fontSize: 16,
    color: COLOR_GRAY,
  },
  checkBox: {
    width: 25,
    height: 25,
    padding: 6,
    marginRight: 8,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLOR_GREEN,
    backgroundColor: COLOR_GREEN,
    elevation: 10,
  },
  checkBoxImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
