import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { courses } from '../assets/data';

export default class CoursesScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#efefef',
  },
});
