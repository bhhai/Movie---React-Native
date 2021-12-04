import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const MovieDetail = ({route, navigation, data}) => {
  const {id} = route.params;
  const {movieList} = route.params;
  return movieList.map(
    (movie, i) =>
      movie.id === id && (
        <View key={i}>
          <View>
            <Image
              source={{uri: `${movie.avt}`}}
              style={{height: HEIGHT * 0.4, width: WIDTH}}
            />
            <Text style={styles.title}>Shang-Chi</Text>
          </View>
          <Text style={styles.date}>{movie.releaseDate}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 15,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              marginHorizontal: 20,
            }}>
            <View style={styles.color}></View>
            <View style={styles.color}></View>
            <View style={styles.color}></View>
            <View style={styles.color}></View>
            <View style={styles.color}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 15,
            }}>
            <TouchableOpacity
              style={{
                borderRadius: 100,
                overflow: 'hidden',
                width: 60,
                height: 60,
                marginHorizontal: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <ImageBackground
                style={styles.avt}
                source={{uri: `${movie.avt}`}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
                width: 60,
                height: 60,
                backgroundColor: '#fff',
                borderRadius: 50,
              }}
              onPress={() => navigation.push('People')}>
              <FontAwesome5 name={'plus'} size={20} color="#01a699" />
            </TouchableOpacity>
          </View>
        </View>
      ),
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
    position: 'absolute',
    bottom: 0,
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, .1)',
    left: 0,
    width: WIDTH,
    textAlign: 'center',
    paddingVertical: 10,
  },
  date: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginHorizontal: 20,
    fontWeight: '600',
  },
  color: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: 'red',
  },
  avt: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: '#ccc',
  },
});
