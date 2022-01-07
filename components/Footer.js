import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Footer = () => {
  return (
    <View>
      <ImageBackground
        source={require('./footer-bg.jpg')}
        style={{width: WIDTH, height: 200}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 30,
          }}>
          <Image
            source={{
              uri: 'https://bi-movie.vercel.app/static/media/tmovie.67797e94.png',
            }}
            style={{
              height: 35,
              width: 35,
              resizeMode: 'cover',
              marginRight: 8,
            }}
          />
          <Text style={{fontSize: 20, fontWeight: '600', color: '#fff'}}>
            Bi Movie
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: '#fff',
            textAlign: 'center',
          }}>
          Made by HoangHai
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
