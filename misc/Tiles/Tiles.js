import React, {useRef, useState} from 'react';
import s from './Tiles.s';
import {ScrollView, Vibration, Animated, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ListItem} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import {COLOR_SILVER} from '../../values/colors';

const Tiles = ({data, disabled, isDeletingMode, onDelete, onItemChange}) => {
  const [animatedItem, setAnimatedItem] = useState(null);

  const innerWidth = Dimensions.get('screen').width;
  const animation = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const stackPush = (route, params) => {
    navigation.push(route, params);
  };

  const changeTitle = (e, item, id) => {
    const value = e.nativeEvent.text;
    item.title = value;
    onItemChange(item, id);
  };

  const changeStorage = (value, item, id) => {
    Vibration.vibrate(50);
    const index = data.map((item) => item.id).indexOf(id);
    setAnimatedItem(index);
    removeAnimation();

    setTimeout(() => {
      item.isArchived = !value;
      onItemChange(item, id);
      setAnimatedItem(null);
    }, 200);
  };

  const removeAnimation = () => {
    Animated.timing(animation, {
      toValue: -innerWidth,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView style={s.container}>
      {data.map((item, index) => (
        <Animated.View
          style={{
            transform: [{translateX: animatedItem === index ? animation : 0}],
          }}>
          <ListItem
            key={item.id}
            bottomDivider
            delayLongPress={800}
            onLongPress={() => changeStorage(item.isArchived, item, item.id)}
            onPress={() =>
              isDeletingMode
                ? onDelete(index)
                : stackPush('TaskList', {
                    disabled: disabled,
                    index: index,
                    id: item.id,
                    title: item.title,
                  })
            }>
            <ListItem.Content>
              <TextInput
                style={s.input}
                value={item.title}
                editable={!disabled}
                placeholder={item.placeholder}
                placeholderTextColor={COLOR_SILVER}
                onChange={(e) => changeTitle(e, item, item.id)}
              />
            </ListItem.Content>
          </ListItem>
        </Animated.View>
      ))}
    </ScrollView>
  );
};

export default Tiles;
