import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const MovieCard = ({img, name, id, data}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{marginRight: 25}}
      onPress={() =>
        navigation.navigate('MovieDetail', {
          id: id,
          data: data,
        })
      }>
      <Image
        source={{uri: img}}
        style={{height: 200, width: 130, resizeMode: 'cover', borderRadius: 15}}
      />
      <Text
        style={{
          color: '#fff',
          maxWidth: 130,
          marginVertical: 8,
          fontSize: 16,
          fontWeight: 'bold',
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});
