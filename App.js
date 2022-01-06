import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Dimensions, StyleSheet} from 'react-native';
import BottomTab from './components/BottomTab';
import Header from './components/Header';
import HomeSlide from './components/HomeSlide';
import Home from './screens/Home';
import MovieDetail from './screens/MovieDetail';

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

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
