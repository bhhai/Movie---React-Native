import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const MovieCard = ({img}) => {
  console.log(img);
  return (
    <View>
      <Image source={{uri: img}} style={{height: 200, width: 100}} />
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});
