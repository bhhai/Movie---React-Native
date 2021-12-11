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
import tmdbApi, {movieType} from '../api/tmdbApi';
import ButtonComponent from '../components/ButtonComponent';
import CategoryList from '../components/CategoryList';
import HomeSlide from '../components/HomeSlide';

let HEIGHT = Dimensions.get('window').height;
let WIDTH = Dimensions.get('window').width;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = {};
      try {
        var response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
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
      <ScrollView>
        <View>
          <HomeSlide movies={movies} />
        </View>
        <View style={styles.category}>
          <View style={styles.categoryHeader}>
            <Text style={styles.categoryTitle}>Trending Movies</Text>
            <FontAwesome5Icon name={'angle-right'} color={'#fff'} size={26} />
          </View>
          <CategoryList />
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
