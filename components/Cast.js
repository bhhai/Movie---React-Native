import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import apiConfig from '../api/apiConfig';
import tmdbApi from '../api/tmdbApi';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Cast = ({id, category}) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const response = await tmdbApi.credits(category, id);
      setCast(response.cast.slice(0, 6));
    };

    getList();
  }, [category, id]);
  return (
    <View style={{paddingHorizontal: 20}}>
      <Text style={{color: '#fff', fontSize: 24, marginVertical: 20}}>
        Casts
      </Text>
      <ScrollView horizontal>
        {cast.map((item, i) => (
          <>
            <View key={i} style={{marginRight: 20}}>
              <Image
                source={{
                  uri: `${apiConfig.originalImage(item.profile_path)}`,
                }}
                style={{
                  width: 130,
                  height: 200,
                  resizeMode: 'cover',
                  position: 'relative',
                  borderRadius: 20,
                }}
              />
              <Text
                style={{color: '#fff', fontSize: 16, marginVertical: 5}}
                key={item.id}>
                {item.name}
              </Text>
            </View>
          </>
        ))}
      </ScrollView>
    </View>
  );
};

export default Cast;

const styles = StyleSheet.create({});
