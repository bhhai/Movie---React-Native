import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Header = () => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.logo}>
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
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name={'user'} size={26} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#0f0f0f',
    paddingVertical: 15,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
