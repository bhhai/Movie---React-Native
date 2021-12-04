import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MovieCart = ({data, onPress}) => {
  const handlePressItem = movie => {
    if (!onPress) return;
    onPress(movie.id);
  };
  return data.map((movie, i) => (
    <TouchableOpacity
      key={i}
      style={styles.container}
      onPress={() => handlePressItem(movie)}>
      <View style={styles.avatar}>
        <Image
          source={{uri: `${movie.avt}`}}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            borderWidth: 4,
            borderColor: '#ff0000',
          }}
        />
      </View>
      <View style={styles.title}>
        <View>
          <Text style={styles.itemTitle}>{movie.title}</Text>
          <Text style={styles.itemDate}>{movie.releaseDate}</Text>
          <Text>People</Text>
        </View>
        <FontAwesome5 style={styles.itemIcon} name={'angle-right'} />
      </View>
    </TouchableOpacity>
  ));
};

export default MovieCart;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  avatar: {
    flex: 1,
  },
  title: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  itemDate: {
    fontStyle: 'italic',
    fontWeight: '600',
  },
  itemIcon: {
    fontSize: 24,
  },
});
