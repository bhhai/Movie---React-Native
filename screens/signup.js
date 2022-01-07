import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/FontAwesome5';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ButtonComponent from '../components/ButtonComponent';
const Stack = createNativeStackNavigator();
const image = {
  uri: 'https://www.whats-on-netflix.com/wp-content/uploads/2021/08/netflix-library-photo-scaled.jpg',
};

export default function signup({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.header}></View>
        <View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 30,
                marginTop: 50,
                fontWeight: '900',
                color: '#1dbfbf',
              }}>
              ĐĂNG KÝ
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: 30,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <AntDesign
              name="user"
              size={24}
              color="white"
              style={{position: 'relative', top: 10, left: 1}}
            />
            <TextInput
              style={styles.inputUser}
              placeholder="   Email hoặc số điện thoại"
              keyboardType="default"
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: 30,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <AntDesign
              name="lock"
              size={24}
              color="white"
              style={{position: 'relative', top: 10, left: 1}}
            />
            <TextInput
              style={styles.inputUser}
              placeholder="   Mật Khẩu"
              keyboardType="default"
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: 30,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <AntDesign
              name="lock"
              size={24}
              color="white"
              style={{position: 'relative', top: 10, left: 1}}
            />
            <TextInput
              style={styles.inputUser}
              placeholder="   Nhập lại mật khẩu"
              keyboardType="default"
            />
          </View>
          <View style={{flexDirection: 'row', marginLeft: 50}}>
            <View
              style={{
                alignItems: 'center',
                marginTop: 30,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <AntDesign
                name="drive-file-rename-outline"
                size={24}
                color="white"
                style={{position: 'relative', top: 10, left: 1}}
              />
              <TextInput
                style={styles.inputUser1}
                placeholder="   Họ tên"
                keyboardType="default"
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                marginTop: 30,
                marginLeft: 35,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TextInput
                style={styles.inputUser1}
                placeholder="   Tên đệm"
                keyboardType="default"
              />
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: 30,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <AntDesign
              name="phone"
              size={24}
              color="white"
              style={{position: 'relative', top: 10, left: 1}}
            />
            <TextInput
              style={styles.inputUser}
              placeholder="   Số điện thoại"
              keyboardType="default"
            />
          </View>

          <View
            style={{
              marginTop: 30,
              backgroundColor: 'red',
              width: 200,
              height: 40,
              marginLeft: 120,
              textAlign: 'center',
              alignItems: 'center',
              borderRadius: 45,
            }}>
            <ButtonComponent
              title="ĐĂNG KÝ"
              color="#fff"
              onClick={() => navigation.navigate('Home')}
            />
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <ButtonComponent
              title="ĐĂNG NHẬP"
              color="#fff"
              onClick={() => navigation.navigate('signin')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 30,
    marginBottom: 48,
    textAlign: 'center',
    color: 'pink',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  textInput: {
    height: 30,
    borderColor: 'white',
    borderBottomWidth: 1,
    marginBottom: 36,
    width: 300,
    color: 'green',
  },
  btnContainer: {
    backgroundColor: 'black',
    marginTop: 12,
  },
  tinyLogo: {
    left: 40,
    width: 200,
    height: 100,
  },
  name: {
    flexDirection: 'row',
  },
  tiny: {
    left: 50,
    width: 30,
    height: 30,
  },
  inputUser: {
    width: 300,
    height: 40,
    marginTop: 10,
    borderBottomWidth: 1,
    fontSize: 16,
    backgroundColor: 'white',
    borderRadius: 45,
  },
  inputUser1: {
    width: 150,
    height: 40,
    marginTop: 10,
    borderBottomWidth: 1,
    fontSize: 16,
    backgroundColor: 'white',
    borderRadius: 45,
  },
  Image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
});
