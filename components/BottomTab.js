import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React, {Component} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/Home';
import Movies from '../screens/Movies';
import TvSeries from '../screens/TvSeries';

const Tab = createMaterialBottomTabNavigator();

export default class BottomTab extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#ff0000"
        barStyle={{backgroundColor: 'rgba(0, 0, 0, .7)'}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <FontAwesome5 name={'home'} color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Movies"
          component={Movies}
          options={{
            tabBarLabel: 'Movies',
            tabBarIcon: ({color}) => (
              <FontAwesome5 name={'comments'} color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="TV Series"
          component={TvSeries}
          options={{
            tabBarLabel: 'TV Series',
            tabBarIcon: ({color}) => (
              <FontAwesome5 name={'comments'} color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
