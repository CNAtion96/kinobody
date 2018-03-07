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

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Image source={require('../assets/images/main_background.jpg')} style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Image
              source={require('../assets/images/kino_logo.png')}
              style={styles.welcomeImage}
          />
          <Text style={styles.tagline}>Want To Know How To Build</Text>
          <Text style={styles.tagline}>The Physique You Want?</Text>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: '#efefef',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
    transform: [{scale: 2}]
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  tagline: {
    color: 'whitesmoke', 
    backgroundColor: 'transparent',
    textAlign: 'center', 
    fontSize: 12, 
    fontFamily: 'notoserif'
  },
});
