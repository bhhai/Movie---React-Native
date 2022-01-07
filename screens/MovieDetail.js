import React, {useEffect, useState} from 'react';
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
import {category, movieType} from '../api/tmdbApi';
import CategoryList from '../components/CategoryList';
import Footer from '../components/Footer';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const MovieDetail = ({route, navigation}) => {
  const {id, data} = route.params;
  const [star, setStar] = useState([]);
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
            Point: {data.vote_average} ({data.vote_count} votes)
          </Text>
          <Text
            style={{
              position: 'absolute',
              bottom: 40,
              color: '#fff',
              fontSize: 18,
              marginHorizontal: 20,
              borderWidth: 1,
              borderColor: '#fff',
              paddingHorizontal: 15,
              borderRadius: 10,
            }}>
            {data.original_language}
          </Text>
        </ImageBackground>
        <Text
          style={{
            color: '#fff',
            fontSize: 24,
            marginHorizontal: 20,
            marginVertical: 20,
          }}>
          Overview
        </Text>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            paddingHorizontal: 20,
          }}>
          {data.overview}
        </Text>
        <View>
          <Cast id={id} category="movie" />
        </View>
        <View style={{marginVertical: 30, marginHorizontal: 20}}>
          <Text style={{color: '#fff', fontSize: 22}}>{data.title}</Text>
          <Text style={{color: '#fff', marginVertical: 10}}>
            {data.release_date}
          </Text>
          <ImageBackground
            source={{
              uri: `${apiConfig.originalImage(
                data.backdrop_path || data.poster_path,
              )}`,
            }}
            style={{
              height: 250,
              resizeMode: 'center',
              marginVertical: 20,
            }}>
            <View style={styles.overlay}></View>
          </ImageBackground>
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
            }}>
            Comming soon
          </Text>
          <CategoryList category={category.tv} type={movieType.top_rated} />
        </View>
        <Footer />
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
