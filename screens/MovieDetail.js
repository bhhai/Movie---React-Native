import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import apiConfig from '../api/apiConfig';
import Cast from '../components/Cast';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const MovieDetail = ({route, navigation}) => {
  const {id, data} = route.params;
  console.log(data);
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#0f0f0f'}}>
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
          <Text
            style={{
              position: 'absolute',
              bottom: 80,
              color: '#fff',
              fontSize: 18,
              paddingHorizontal: 20,
            }}>
            Release date: {data.release_date}
          </Text>
          <Text>Vote: {data.vote_average}</Text>
        </ImageBackground>
        <View>
          <Cast id={id} category="movie" />
        </View>
        <View style={{marginVertical: 30, marginHorizontal: 20}}>
          <Text style={{color: '#fff', fontSize: 22}}>{data.title}</Text>

          <Image
            source={{
              uri: `${apiConfig.originalImage(
                data.backdrop_path || data.poster_path,
              )}`,
            }}
            style={{height: 250, resizeMode: 'center', marginVertical: 20}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
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
    opacity: 0.7,
  },
  tilte: {
    position: 'absolute',
    bottom: 120,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
});
