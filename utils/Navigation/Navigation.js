import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLOR_BLUE, COLOR_SILVER} from '../../values/colors';
import Tasks from '../../screens/Tasks/Tasks';
import Archive from '../../screens/Archive/Archive';
import TaskList from '../../screens/TaskList/TaskList';
import TilesIcon from '../../assets/icons/tile.png';
import ArchiveIcon from '../../assets/icons/archive.png';
import {generateRandomId} from '../IdGenerator/IdGenerator';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();

  const iconStyle = {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: true,
        activeBackgroundColor: '#eee',
        labelStyle: {
          fontSize: 12,
          color: COLOR_BLUE,
        },
        style: {
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          tabBarIcon: () => <Image style={iconStyle} source={TilesIcon} />,
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Tasks', {customKey: generateRandomId()});
          },
        }}
      />
      <Tab.Screen
        name="Archive"
        component={Archive}
        options={{
          tabBarIcon: () => <Image style={iconStyle} source={ArchiveIcon} />,
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Archive', {customKey: generateRandomId()});
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Root" component={TabNavigator} />
      <Stack.Screen name="TaskList" component={TaskList} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
