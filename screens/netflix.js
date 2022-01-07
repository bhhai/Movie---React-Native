import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/FontAwesome5';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const image = {
  uri: 'https://afamilycdn.com/150157425591193600/2021/9/25/squid-game-anime-comic-manga-source-material-16325597695932045180059.jpeg',
};

export default function netflix({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={{backgroundColor: 'black'}}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.header}>
            <View>
              <Text
                style={{
                  fontSize: 30,
                  marginTop: 10,
                  color: 'red',
                  marginLeft: 10,
                  fontWeight: '900',
                }}>
                {' '}
                NETFLIX
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 10,
                  color: 'white',
                  marginLeft: 10,
                }}>
                {' '}
                Trang chủ
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 10,
                  color: 'white',
                  marginLeft: 10,
                }}>
                {' '}
                TV Series
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 10,
                  color: 'white',
                  marginLeft: 10,
                }}>
                {' '}
                Mới & Phổ biến
              </Text>
            </View>
          </View>
          <View style={styles.body}></View>

          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 16,
                marginTop: 10,
                color: 'white',
                marginLeft: 10,
              }}>
              {' '}
              TOP 1 NETFLIX
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: 10,
                color: 'white',
                marginLeft: 10,
              }}>
              {' '}
              Giả tưởng
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: 10,
                color: 'white',
                marginLeft: 10,
              }}>
              {' '}
              Phim mới
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: 10,
                color: 'white',
                marginLeft: 10,
              }}>
              {' '}
              Phổ biến
            </Text>
          </View>

          <View style={{flex: 3, flexDirection: 'row'}}>
            <View style={styles.trai}>
              <AntDesign name="plus" size={24} color="white" />
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 10,
                  color: 'white',
                  marginLeft: 10,
                }}>
                {' '}
                Danh sách
              </Text>
            </View>
            <View style={styles.giua}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 137,
                  height: 60,
                  textAlign: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <AntDesign
                  name="play"
                  size={30}
                  style={{marginHorizontal: 10}}
                  color="black"
                />
                <Button
                  title="PHÁT"
                  color="black"
                  onPress={() => navigation.navigate('trangchu')}
                />
              </View>
            </View>
            <View style={styles.phai}>
              <AntDesign name="info" size={24} color="white" />
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 10,
                  color: 'white',
                  marginLeft: 10,
                }}>
                {' '}
                Thông tin
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={{marginTop: 30}}>
          <Text
            style={{
              marginTop: 40,
              fontSize: 26,
              marginTop: 10,
              color: 'white',
              marginLeft: 10,
              fontWeight: 'bold',
            }}>
            {' '}
            Chỉ có trên NETFLIX
          </Text>
        </View>

        <ScrollView horizontal={true}>
          <View
            style={{
              height: 400,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://phimsml.com/wp-content/uploads/2020/07/spl-tvhayorg-5291-1.jpg',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'data:image/jpeg;base64,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',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://channel.vcmedia.vn/thumb_w/640/prupload/603/2016/08/img20160810144618779.jpg',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://ss-images.saostar.vn/wp700/pc/1612324479842/105252591_1.jpg',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
          </View>
        </ScrollView>

        <View style={{marginTop: 30}}>
          <Text
            style={{
              marginTop: 40,
              fontSize: 26,
              marginTop: 10,
              color: 'white',
              marginLeft: 10,
              fontWeight: 'bold',
            }}>
            {' '}
            Danh Sách Xem Tiếp Tục
          </Text>
        </View>

        <ScrollView horizontal={true}>
          <View
            style={{
              height: 400,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://phimsml.com/wp-content/uploads/2020/07/spl-tvhayorg-5291-1.jpg',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/5/18/youth-of-may-couple-poster-16213224643591309055357.jpeg',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://channel.vcmedia.vn/thumb_w/640/prupload/603/2016/08/img20160810144618779.jpg',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://ss-images.saostar.vn/wp700/pc/1612324479842/105252591_1.jpg',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
          </View>
        </ScrollView>

        <View style={{marginTop: 30}}>
          <Text
            style={{
              marginTop: 40,
              fontSize: 26,
              marginTop: 10,
              color: 'white',
              marginLeft: 10,
              fontWeight: 'bold',
            }}>
            {' '}
            Thịnh Hành
          </Text>
        </View>

        <ScrollView horizontal={true}>
          <View
            style={{
              height: 400,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://phimsml.com/wp-content/uploads/2020/07/spl-tvhayorg-5291-1.jpg',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://channel.vcmedia.vn/thumb_w/640/prupload/603/2016/08/img20160810144618779.jpg',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://ss-images.saostar.vn/wp700/pc/1612324479842/105252591_1.jpg',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
            <View style={styles.backgrProduct}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://dientungaynay.vn/sites/default/files/styles/img_noidung/public/phamanh/2021_08_04/netflix.jpg?itok=y9wYRiv3',
                }}
              />
            </View>
          </View>
        </ScrollView>
      </ScrollView>
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
    flex: 1,
  },
  body: {
    flex: 6,
    height: 400,
  },

  btnContainer: {
    backgroundColor: 'black',
    marginTop: 12,
  },
  trai: {
    flex: 1,
    backgroundColor: '#000000c0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  giua: {
    flex: 1,
    backgroundColor: '#000000c0',
  },

  phai: {
    flex: 1,
    backgroundColor: '#000000c0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phim: {
    flex: 5,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  tinyLogo: {
    width: 200,
    height: 350,
    borderRadius: 25,
  },
  backgrProduct: {
    backgroundColor: '#fff',
    marginHorizontal: 35,
    width: 170,
    height: 300,
    borderRadius: 25,
    borderColor: 'green',
    shadowColor: '#046613',
    shadowOpacity: 0.9,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 25,
    elevation: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
