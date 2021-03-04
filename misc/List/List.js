import React from 'react';
import s from './List.s';
import {ScrollView, TouchableOpacity, Image, TextInput} from 'react-native';
import {ACTIVE_OPACITY} from '../../values/values';
import checkIcon from '../../assets/icons/check.png';
import {COLOR_GREEN, COLOR_SILVER, COLOR_WHITE} from '../../values/colors';

const List = ({data, disabled, isDeletingMode, onDelete, onItemChange}) => {
  const changeContent = (e, item, id) => {
    const value = e.nativeEvent.text;
    item.content = value;
    onItemChange(item, id);
  };

  const changeStatus = (value, item, id) => {
    item.isDone = !value;
    onItemChange(item, id);
  };

  return (
    <ScrollView style={s.container}>
      {data.map((item, index) => (
        <TouchableOpacity
          style={s.item}
          activeOpacity={ACTIVE_OPACITY}
          onPress={() => (isDeletingMode ? onDelete(index) : null)}>
          <TextInput
            style={[
              s.input,
              {textDecorationLine: item.isDone ? 'line-through' : 'none'},
            ]}
            value={item.content}
            key={item.id}
            editable={!disabled && !item.isDone}
            placeholder={item.placeholder}
            placeholderTextColor={COLOR_SILVER}
            onChange={(e) => changeContent(e, item, item.id)}
          />
          <TouchableOpacity
            style={[
              s.checkBox,
              {backgroundColor: item.isDone ? COLOR_GREEN : COLOR_WHITE},
            ]}
            disabled={disabled}
            activeOpacity={ACTIVE_OPACITY}
            onPress={() => changeStatus(item.isDone, item, item.id)}>
            {item.isDone ? (
              <Image style={s.checkBoxImg} source={checkIcon} />
            ) : null}
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default List;
