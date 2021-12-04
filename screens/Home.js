import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

let ScreenHeight = Dimensions.get('window').height;

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f0f0f',
    flex: 1,
  },
});
