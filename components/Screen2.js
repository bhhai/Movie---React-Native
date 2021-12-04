import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

export default class Screen2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Text style={styles.textStyle}>Weight(KG)</Text>
          <TextInput style={styles.inputStyle} />
        </View>
        <View style={styles.input}>
          <Text style={styles.textStyle}>Height(CM)</Text>
          <TextInput style={styles.inputStyle} />
          <Text style={{fontSize: 22, fontWeight: '600', marginTop: 50}}>
            BMI: 0.00
          </Text>
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: '#ccc',
              marginTop: 50,
            }}>
            <Text style={styles.textStyle}>Compute</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  inputStyle: {
    backgroundColor: '#ccc',
    width: 300,
  },
  textStyle: {
    fontSize: 22,
    fontWeight: '600',
  },
});
