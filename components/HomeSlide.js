import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {ImageBackground, TouchableWithoutFeedback} from 'react-native';
import {Animated, Dimensions, StyleSheet, Text, View} from 'react-native';
import apiConfig from '../api/apiConfig';
import tmdbApi, {movieType} from '../api/tmdbApi';
import ButtonComponent from './ButtonComponent';

let HEIGHT = Dimensions.get('window').height;
let WIDTH = Dimensions.get('window').width;

const HomeSlide = ({movies}) => {
  const newSeasonScrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  return (
    <Animated.FlatList
      horizontal
      pagingEnabled
      snapToAlignment="center"
      snapToInterval={WIDTH}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      decelerationRate={0}
      data={movies}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {x: newSeasonScrollX}}}],
        {useNativeDriver: false},
      )}
      renderItem={({item, index}) => (
        <TouchableWithoutFeedback style={{position: 'relative'}}>
          <View
            style={{
              width: WIDTH,
              alignItem: 'center',
              justifyContent: 'center',
              backgroundColor: '#0f0f0f',
              marginVertical: 40,
            }}>
            <ImageBackground
              source={{
                uri: `${apiConfig.originalImage(
                  item.backdrop_path ? item.backdrop_path : item.poster_path,
                )}`,
              }}
              resizeMode="cover"
              imageStyle={{borderRadius: 30}}
              style={{
                width: WIDTH * 0.9,
                height: HEIGHT * 0.35,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <View style={styles.overlay} />
            </ImageBackground>
            <View
              style={{
                position: 'absolute',
                left: 0,
                width: WIDTH * 0.9,
                marginLeft: 20,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 22,
                  color: '#fff',
                  fontWeight: '600',
                  marginTop: 0,
                  marginHorizontal: 10,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  color: '#fff',
                  fontWeight: '600',
                  marginTop: 10,
                  marginHorizontal: 15,
                }}>
                {item.overview}
              </Text>
              <View
                style={{
                  marginTop: 30,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 30,
                }}>
                <ButtonComponent
                  title="Watch now"
                  icon="play-circle"
                  backColor="red"
                  color="#fff"
                  onClick={() =>
                    navigation.navigate('MovieDetail', {
                      id: item.id,
                      data: item,
                    })
                  }
                />
                <ButtonComponent
                  title="View detail"
                  icon="info-circle"
                  color="#000"
                  backColor="#ccc"
                  onClick={() =>
                    navigation.navigate('MovieDetail', {
                      id: item.id,
                      data: item,
                    })
                  }
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    />
  );
};

export default HomeSlide;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: 0.6,
    borderRadius: 30,
  },
});
