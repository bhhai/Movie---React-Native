import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

export default class Time extends Component {
  render() {
    return (
      <View>
        <View>
          <Text
            style={{
              textAlign: 'center', // <-- the magic
              fontWeight: 'bold',
              fontSize: 36,
              marginTop: 100,
              marginBottom: 50,
              width: 400,
              color: '#000',
            }}>
            00 : 00.00
          </Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Lap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Stop/Start</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.laps}>
          <View style={styles.lap}>
            <Text style={styles.lapText}>#Lap2</Text>
            <Text style={styles.lapText}>01 : 12.36</Text>
          </View>
          <View style={styles.lap}>
            <Text style={styles.lapText}>#Lap1</Text>
            <Text style={styles.lapText}>01 : 12.36</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  laps: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    marginTop: 50,
  },
  lap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  lapText: {
    fontSize: 22,
    fontWeight: '600',
  },
  btn: {
    marginRight: 20,
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: '#ccc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
