import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class MacroScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
          <Text>Macros</Text>
    );
  }
}