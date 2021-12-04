import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Image, StyleSheet, Text, View} from 'react-native';

const People = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingVertical: 15,
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <Image
            source={{
              uri: 'https://image.tmdb.org/t/p/original//cinER0ESG0eJ49kXlExM0MEWGxW.jpg',
            }}
            style={{height: 60, width: 60, borderRadius: 100}}
          />
        </View>
        <View
          style={{
            marginLeft: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 5,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: '600', color: '#000'}}>
            Hai
          </Text>
          <FontAwesome5 name={'check-circle'} size={20} color={'green'} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingVertical: 15,
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <Image
            source={{
              uri: 'https://image.tmdb.org/t/p/original//cinER0ESG0eJ49kXlExM0MEWGxW.jpg',
            }}
            style={{height: 60, width: 60, borderRadius: 100}}
          />
        </View>
        <View
          style={{
            marginLeft: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 5,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: '600', color: '#000'}}>
            Hai
          </Text>
          <FontAwesome5 name={'check-circle'} size={20} color={'green'} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingVertical: 15,
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <Image
            source={{
              uri: 'https://image.tmdb.org/t/p/original//cinER0ESG0eJ49kXlExM0MEWGxW.jpg',
            }}
            style={{height: 60, width: 60, borderRadius: 100}}
          />
        </View>
        <View
          style={{
            marginLeft: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 5,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: '600', color: '#000'}}>
            Hai
          </Text>
          <FontAwesome5 name={'check-circle'} size={20} color={'green'} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingVertical: 15,
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <Image
            source={{
              uri: 'https://image.tmdb.org/t/p/original//cinER0ESG0eJ49kXlExM0MEWGxW.jpg',
            }}
            style={{height: 60, width: 60, borderRadius: 100}}
          />
        </View>
        <View
          style={{
            marginLeft: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 5,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: '600', color: '#000'}}>
            Hai
          </Text>
          <FontAwesome5 name={'check-circle'} size={20} color={'green'} />
        </View>
      </View>
    </>
  );
};

export default People;

const styles = StyleSheet.create({});
