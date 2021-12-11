import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useRef} from 'react';
import {
  Animated,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import BottomTab from './components/BottomTab';
import ButtonComponent from './components/ButtonComponent';
import Header from './components/Header';
import HomeSlide from './components/HomeSlide';
import MovieCart from './components/MovieCart';

let HEIGHT = Dimensions.get('window').height;
let WIDTH = Dimensions.get('window').width;

const movies = [
  {
    id: 1,
    title: 'Shang-chi',
    releaseDate: '1/1/2022',
    avt: 'https://image.tmdb.org/t/p/original//lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg',
  },
  {
    id: 2,
    title: 'Spiderman',
    releaseDate: '1/1/2022',
    avt: 'https://image.tmdb.org/t/p/original//cinER0ESG0eJ49kXlExM0MEWGxW.jpg',
  },
  {
    id: 3,
    title: 'Venom ',
    releaseDate: '1/1/2022',
    avt: 'https://image.tmdb.org/t/p/original//lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg',
  },
];

const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Header />
      <BottomTab />
    </NavigationContainer>
  );
};

export default App;

const Home1 = ({navigation}) => {
  const handleMovieItemPress = movieId => {
    console.log('App press id: ', movieId);
    navigation.navigate('MovieDetail', {
      id: movieId,
      movieList: movies,
    });
  };
  return (
    <>
      {/* <Header /> */}
      <MovieCart data={movies} onPress={handleMovieItemPress} />

      {/* <HomeSlide /> */}
      <BottomTab />
    </>
  );
};

const styles = StyleSheet.create({});
