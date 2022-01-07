import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import apiConfig from '../api/apiConfig';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const MovieItem = ({item, categories}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{maxWidth: WIDTH * 0.45, marginHorizontal: 10, marginTop: 20}}
      onPress={() =>
        navigation.navigate('MovieDetail', {
          id: item.id,
          data: item,
        })
      }>
      <Image
        source={{
          uri: apiConfig.w500Image(item.poster_path || item.backdrop_path),
        }}
        style={{
          width: WIDTH * 0.45,
          minHeight: 250,
          borderRadius: 20,
          resizeMode: 'cover',
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          color: '#fff',
          fontWeight: 'bold',
          marginVertical: 5,
        }}>
        {item.title || item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default MovieItem;

const styles = StyleSheet.create({});
