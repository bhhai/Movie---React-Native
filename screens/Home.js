import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import tmdbApi, {category, movieType} from '../api/tmdbApi';
import ButtonComponent from '../components/ButtonComponent';
import CategoryList from '../components/CategoryList';
import Header from '../components/Header';
import HomeSlide from '../components/HomeSlide';

let HEIGHT = Dimensions.get('window').height;
let WIDTH = Dimensions.get('window').width;

const Home = ({navigation}) => {
  const [movies, setMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [movieTopRate, setMovieTopRate] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = {};
      try {
        var response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieList(response.results);
        setMovies(response.results.slice(0, 4));
      } catch (error) {
        console.log('Fetch data error: ', error);
      }
    };

    getMovies();
  }, []);

  const renderItem = ({item, i}) => (
    <ButtonComponent backColor="#000" title={item.id} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <View>
          <HomeSlide movies={movies} />
        </View>
        <View style={styles.category}>
          <View style={styles.categoryHeader}>
            <Text style={styles.categoryTitle}>Trending Movies</Text>
            <FontAwesome5Icon name={'angle-right'} color={'#fff'} size={26} />
          </View>
          <CategoryList
            category={category.movie}
            type={movieType.popular}
            navigation={navigation}
          />
        </View>
        <View style={styles.category}>
          <View style={styles.categoryHeader}>
            <Text style={styles.categoryTitle}>Top Rated Movies</Text>
            <FontAwesome5Icon name={'angle-right'} color={'#fff'} size={26} />
          </View>
          <CategoryList
            category={category.movie}
            type={movieType.top_rated}
            navigation={navigation}
          />
        </View>

        <View style={styles.category}>
          <View style={styles.categoryHeader}>
            <Text style={styles.categoryTitle}>Trending TV</Text>
            <FontAwesome5Icon name={'angle-right'} color={'#fff'} size={26} />
          </View>
          <CategoryList
            category={category.tv}
            type={movieType.popular}
            navigation={navigation}
          />
        </View>
        <View style={styles.category}>
          <View style={styles.categoryHeader}>
            <Text style={styles.categoryTitle}>Top Rated TV</Text>
            <FontAwesome5Icon name={'angle-right'} color={'#fff'} size={26} />
          </View>
          <CategoryList
            category={category.tv}
            type={movieType.top_rated}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f0f0f',
  },
  category: {
    paddingHorizontal: 20,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});
