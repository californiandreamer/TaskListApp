import React, {useEffect, useState} from 'react';
import s from './TaskList.s';
import {View, Text} from 'react-native';
import List from '../../misc/List/List';
import Button from '../../misc/Button/Button';
import {
  getItem,
  setItem,
} from '../../utils/AsyncStorageHandler/AsyncStorageHandler';
import {generateRandomId} from '../../utils/IdGenerator/IdGenerator';

const TaskList = ({route}) => {
  const props = {...route.params};

  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [isDeletingMode, setIsDeletingMode] = useState(false);

  const initialItem = {
    id: generateRandomId(),
    placeholder: 'New item',
    isDone: false,
  };

  const getData = async () => {
    const storageData = await getItem('data');
    const parsedStorageData = JSON.parse(storageData);
    const itemId = props.id;
    const findedItem = parsedStorageData.find((item) => item.id === itemId);
    const findedItemTasks = findedItem.tasks;

    setList(findedItemTasks);
    setData(parsedStorageData);
  };

  const addItem = () => {
    setList([...list, initialItem]);
  };

  const updateItem = (item, id) => {
    const array = list;
    const index = array.map((item) => item.id).indexOf(id);
    array[index] = item;
    setList([...array]);
  };

  const removeItem = (index) => {
    const array = list;
    if (index > -1) {
      array.splice(index, 1);
    }
    setList([...array]);
  };

  const saveData = async (list) => {
    const array = data;
    const itemId = props.id;
    const itemIndex = array.map((item) => item.id).indexOf(itemId);
    array[itemIndex].tasks = list;
    const stringifiedData = JSON.stringify(array);
    await setItem('data', stringifiedData);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    saveData(list);
  }, [list]);

  return (
    <View style={s.container}>
      <View style={s.wrapper}>
        <Text style={s.title}>{props.title}</Text>
      </View>
      <List
        data={list}
        disabled={props.disabled}
        isDeletingMode={isDeletingMode}
        onDelete={(index) => removeItem(index)}
        onItemChange={(item, id) => updateItem(item, id)}
      />
      {!props.disabled ? (
        <Button
          addAction={() => addItem()}
          onModeChange={(value) => setIsDeletingMode(value)}
        />
      ) : null}
    </View>
  );
};

export default TaskList;
