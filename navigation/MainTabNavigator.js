import React from 'react';
import { Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import CoursesScreen from '../screens/CoursesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FastingScreen from '../screens/FastingScreen';
import MacroScreen from '../screens/FastingScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Courses: {
      screen: CoursesScreen,
    },
    Fasting: {
      screen: FastingScreen,
    },
    Macros: {
      screen: MacroScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios'
              ? `home`
              : 'home';
            break;
          case 'Courses':
            iconName = Platform.OS === 'ios'
              ? `book`
              : 'book';
            break;
          case 'Fasting':
            iconName = Platform.OS === 'ios'
              ? `clock-o`
              : 'clock-o';
            break;
          case 'Macros':
            iconName = Platform.OS === 'ios'
              ? `cutlery`
              : 'cutlery';
          case 'Settings':
            iconName = Platform.OS === 'ios'
              ? `bars`
              : 'bars';
        }
        return (
          <FontAwesome
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarStyle: {backgroundColor: 'black'},
    animationEnabled: true,
    swipeEnabled: true,
  }
);
