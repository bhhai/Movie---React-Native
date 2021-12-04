import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component, useRef} from 'react';
import {
  Animated,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
  Button,
} from 'react-native';
import BottomTab from './components/BottomTab';
import Header from './components/Header';
import MovieCart from './components/MovieCart';
import MovieDetail from './screens/MovieDetail';
import People from './screens/People';

let HEIGHT = Dimensions.get('window').height;
let WIDTH = Dimensions.get('window').width;

const slides = [
  {
    img: 'https://image.tmdb.org/t/p/original//lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg',
  },
  {
    img: 'https://image.tmdb.org/t/p/original//cinER0ESG0eJ49kXlExM0MEWGxW.jpg',
  },
  {
    img: 'https://image.tmdb.org/t/p/original//lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg',
  },
];

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
    title: 'Venom',
    releaseDate: '1/1/2022',
    avt: 'https://image.tmdb.org/t/p/original//lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg',
  },
];

const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home1} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
        <Stack.Screen name="People" component={People} />
      </Stack.Navigator>
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

function HomeSlide() {
  const newSeasonScrollX = useRef(new Animated.Value(0)).current;
  return (
    <Animated.FlatList
      horizontal
      pagingEnabled
      snapToAlignment="center"
      snapToInterval={WIDTH}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      decelerationRate={0}
      data={slides}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {x: newSeasonScrollX}}}],
        {useNativeDriver: false},
      )}
      renderItem={({item, index}) => (
        <TouchableWithoutFeedback>
          <View
            style={{
              width: WIDTH,
              alignItem: 'center',
              justifyContent: 'center',
              marginVertical: -150,
              backgroundColor: '#0f0f0f',
            }}>
            <ImageBackground
              source={{uri: `${item.img}`}}
              resizeMode="cover"
              style={{
                width: WIDTH * 0.9,
                height: HEIGHT * 0.3,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 20,
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      )}
    />
  );
}

const styles = StyleSheet.create({});
