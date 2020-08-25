import React, { Component } from 'react'
import { View, Text, Image, AsyncStorage } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Beranda from './Beranda';
import Note from './Note';

const Stack = createStackNavigator();
export default class App extends Component {
  
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="Beranda">
          <Stack.Screen name="Beranda" component={Beranda} />        
          <Stack.Screen name="Note" component={Note} />        
        </Stack.Navigator>      
      </NavigationContainer>
    );
  }
}
