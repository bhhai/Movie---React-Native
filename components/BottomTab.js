import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import MovieDetail from '../screens/MovieDetail';
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
          component={TabOne}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <FontAwesome5
                name={'home'}
                color={color}
                size={26}
                style={{width: 33}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Movies"
          component={Movies}
          options={{
            tabBarLabel: 'Movies',
            tabBarIcon: ({color}) => (
              <FontAwesome5
                name={'youtube'}
                color={color}
                size={26}
                style={{width: 33}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="TV Series"
          component={TvSeries}
          options={{
            tabBarLabel: 'TV Series',
            tabBarIcon: ({color}) => (
              <FontAwesome5
                name={'tv'}
                color={color}
                size={26}
                style={{width: 33}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

const HomeStack = createNativeStackNavigator();
function TabOne() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{
          title: 'Movie Detail',
          headerStyle: {
            backgroundColor: '#0f0f0f',
          },
          headerTintColor: '#fff',
        }}
      />
    </HomeStack.Navigator>
  );
}
