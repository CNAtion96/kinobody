import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return <ExpoConfigView />;
  }
}
