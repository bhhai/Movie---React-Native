import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default class Screen3 extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Text style={{fontSize: 24, fontWeight: '600', color: '#000'}}>
            {' '}
            SET{' '}
          </Text>
          <Text style={{fontSize: 58, fontWeight: '600', color: '#000'}}>
            9,999.99
          </Text>
          <Text style={{fontSize: 24, fontWeight: '600', color: '#000'}}>
            +115.23 (0.56%)
          </Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity>
            <Text style={styles.btn}>SET</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btn}>SET</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btn}>SET</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity>
            <Text style={styles.btn}>SET</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btn}>SET</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btn}>SET</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity>
            <Text style={styles.btn}>SET</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btn}>SET</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btn}>SET</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btns: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  btn: {
    borderWidth: 2,
    borderColor: '#000',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: 18,
    fontWeight: '600',
    borderRadius: 10,
    color: '#000',
    backgroundColor: '#ccc',
  },
});
