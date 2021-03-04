import React, {useEffect, useState} from 'react';
import s from './Archive.s';
import {View, Text} from 'react-native';
import Tiles from '../../misc/Tiles/Tiles';
import {generateRandomId} from '../../utils/IdGenerator/IdGenerator';
import {
  getItem,
  setItem,
} from '../../utils/AsyncStorageHandler/AsyncStorageHandler';

const Archive = ({route}) => {
  const [data, setData] = useState([]);
  const [isDeletingMode, setIsDeletingMode] = useState(false);
  const filteredData = data.filter((item) => item.isArchived === true);

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
      setData([]);
    }
  };

  const updateItem = (item, id) => {
    const array = data;
    const index = array.map((item) => item.id).indexOf(id);
    array[index] = item;
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
        <Text style={s.title}>Archived tasks</Text>
      </View>
      <Tiles
        data={filteredData}
        disabled
        isDeletingMode={isDeletingMode}
        onItemChange={(item, id) => updateItem(item, id)}
      />
    </View>
  );
};

export default Archive;
