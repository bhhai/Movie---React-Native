import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';
import tmdbApi, {movieType, tvType} from '../api/tmdbApi';
import MovieItem from './MovieItem';
import ButtonComponent from './ButtonComponent';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const MovieGrid = ({keyword, category}) => {
  const [items, setItems] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  console.log(keyword);

  useEffect(() => {
    const getList = async () => {
      try {
        let response = null;
        if (keyword === undefined) {
          const params = {};
          switch (category) {
            case 'tv':
              response = await tmdbApi.getTvList(tvType.popular, {params});
              break;
            default:
              response = await tmdbApi.getMoviesList(movieType.upcoming, {
                params,
              });
          }
        } else {
          const params = {
            query: keyword,
          };
          switch (category) {
            case 'tv':
              response = await tmdbApi.getTvList(tvType.popular, {params});
              break;
            default:
              response = await tmdbApi.getMoviesList(movieType.upcoming, {
                params,
              });
          }
        }

        setItems(response.results);
        setTotalPage(response.total_pages);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };

    getList();
  }, []);

  const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (category) {
        case 'tv':
          response = await tmdbApi.getTvList(tvType.popular, {params});
          break;
        default:
          response = await tmdbApi.getMoviesList(movieType.upcoming, {
            params,
          });
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmdbApi.search(category, {params});
    }
    setItems([...items, ...response.results]);
    setPage(page + 1);
  };
  return (
    <View style={{backgroundColor: '#0f0f0f'}}>
      <MovieSearch text={keyword} />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: WIDTH,
          justifyContent: 'space-between',
        }}>
        {items.map((item, i) => (
          <MovieItem key={i} item={item} />
        ))}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        {page < totalPage && (
          <ButtonComponent
            title="Load more"
            backColor="red"
            color={'#fff'}
            onClick={loadMore}
          />
        )}
      </View>
    </View>
  );
};

export default MovieGrid;

const styles = StyleSheet.create({});

function MovieSearch({text}) {
  const [keyword, setKeyword] = useState('');
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TextInput
        style={{
          backgroundColor: '#000',
          borderWidth: 2,
          borderColor: '#ccc',
          width: 200,
          height: 40,
          color: '#fff',
          borderRadius: 15,
          marginVertical: 20,
          marginRight: 20,
        }}
        onChange={setKeyword}
        value={keyword}
        placeholder="Type here to search..."
      />
      <Button title="Search" />
    </View>
  );
}
