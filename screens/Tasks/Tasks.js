import React, {useEffect, useState} from 'react';
import s from './Tasks.s';
import {View, Text} from 'react-native';
import Tiles from '../../misc/Tiles/Tiles';
import Button from '../../misc/Button/Button';
import {generateRandomId} from '../../utils/IdGenerator/IdGenerator';
import {
  getItem,
  setItem,
} from '../../utils/AsyncStorageHandler/AsyncStorageHandler';

const Tasks = ({route}) => {
  const [data, setData] = useState([]);
  const [isDeletingMode, setIsDeletingMode] = useState(false);
  const filteredData = data.filter((item) => item.isArchived === false);

  const initialItem = {
    id: generateRandomId(),
    placeholder: 'Tap here to entitle this list',
    isArchived: false,
    tasks: [
      {
        id: generateRandomId(),
        content: 'New item',
        isDone: false,
      },
    ],
  };

  const getData = async () => {
    const storageData = await getItem('data');
    const parsedStorageData = JSON.parse(storageData);

    if (storageData !== null) {
      setData(parsedStorageData);
    } else {
      setData([initialItem]);
    }
  };

  const addItem = () => {
    setData([...data, initialItem]);
  };

  const updateItem = (item, id) => {
    const array = data;
    const index = array.map((item) => item.id).indexOf(id);
    array[index] = item;
    setData([...array]);
  };

  const removeItem = (index) => {
    const array = data;
    if (index > -1) {
      array.splice(index, 1);
    }
    setData([...array]);
  };

  const saveData = async (data) => {
    const stringifiedData = JSON.stringify(data);
    await setItem('data', stringifiedData);
  };

  useEffect(() => {
    getData();
  }, [route]);

  useEffect(() => {
    saveData(data);
  }, [data]);

  return (
    <View style={s.container}>
      <View style={s.wrapper}>
        <Text style={s.title}>All tasks</Text>
      </View>
      <Tiles
        data={filteredData}
        isDeletingMode={isDeletingMode}
        onDelete={(index) => removeItem(index)}
        // onStorageChange={(item, id) => updateItem(item, id)}
        onItemChange={(item, id) => updateItem(item, id)}
      />
      <Button
        addAction={() => addItem()}
        onModeChange={(value) => setIsDeletingMode(value)}
      />
    </View>
  );
};

export default Tasks;
