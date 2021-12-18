import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import apiConfig from '../api/apiConfig';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const MovieDetail = ({route, navigation}) => {
  const {id, data} = route.params;
  console.log(data);
  return (
    <>
      <ImageBackground
        source={{
          uri: `${apiConfig.originalImage(
            data.backdrop_path || data.poster_path,
          )}`,
        }}
        style={{
          width: WIDTH,
          height: HEIGHT * 0.35,
          resizeMode: 'cover',
          position: 'relative',
        }}>
        <View style={styles.overlay} />
        <Text style={styles.tilte}>{data.title || data.name}</Text>
      </ImageBackground>
      <Text>Detail {JSON.stringify(id)}</Text>
    </>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: 0.5,
  },
  tilte: {
    position: 'absolute',
    bottom: 90,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
});
