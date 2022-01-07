import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const PageHeader = ({title}) => {
  return (
    <>
      <ImageBackground
        source={require('./footer-bg.jpg')}
        style={{width: WIDTH, height: 150}}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            marginTop: 60,
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
      </ImageBackground>
    </>
  );
};

export default PageHeader;

const styles = StyleSheet.create({});
