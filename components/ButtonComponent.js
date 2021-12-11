import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ButtonComponent = ({title, onClick, icon, color, backColor}) => {
  return (
    <TouchableHighlight onPress={onClick}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: backColor,
          paddingVertical: 8,
          paddingHorizontal: 10,
          borderRadius: 10,
        }}>
        <FontAwesome5 name={icon} size={18} color={color}></FontAwesome5>
        <Text
          style={{
            marginLeft: 5,
            color: color,
            fontSize: 15,
            fontWeight: '600',
          }}>
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});
