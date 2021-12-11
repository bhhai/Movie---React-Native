import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
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
const CategoryList = () => {
  const newSeasonScrollX = useRef(new Animated.Value(0)).current;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = {page: 1};
      try {
        var response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        console.log(response);
        setMovies(response.results);
      } catch (error) {
        console.log('Fetch data error: ', error);
      }
    };

    getMovies();
  }, []);
  return (
    <SafeAreaView>
      {/* <FlatList
        data={moviesList}
        renderItem={({item}) => <MovieCard img={item.poster_path} />}
        keyExtractor={item => item.poster_path || item.backdrop_path}
        horizontal
      /> */}
      {movies.map((item, i) => (
        <MovieCard
          img={`${apiConfig.w500Image(item.poster_path || item.backdrop_path)}`}
          key={i}
        />
      ))}
    </SafeAreaView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
