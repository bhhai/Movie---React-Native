import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import apiConfig from '../api/apiConfig';
import tmdbApi, {movieType} from '../api/tmdbApi';
import MovieCard from './MovieCard';

let HEIGHT = Dimensions.get('window').height;
let WIDTH = Dimensions.get('window').width;
const CategoryList = ({category, type}) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const params = {};
      let response = null;
      try {
        switch (category) {
          case 'movie':
            response = await tmdbApi.getMoviesList(type, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(type, {
              params,
            });
            break;
        }
        setMovies(response.results);
      } catch (error) {
        console.log('Fetch data error: ', error);
      }
    };

    getMovies();
  }, []);
  return (
    <SafeAreaView style={{marginVertical: 25}}>
      <ScrollView horizontal>
        {movies.map((item, i) => (
          <MovieCard
            key={i}
            id={item.id}
            name={item.title || item.name}
            data={item}
            img={`${apiConfig.w500Image(
              item.poster_path || item.backdrop_path,
            )}`}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
