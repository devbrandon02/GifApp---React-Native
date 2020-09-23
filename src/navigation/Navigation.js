/* eslint-disable */

import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { AppGif } from '../components/AppGif';
import { MemesApp } from '../components/MemesApp';


const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="homeScreen"
          component={ AppGif }
          options={{
            title: 'GifsApp',

          }}
        />

        <Stack.Screen
          name="memesScreen"
          component={ MemesApp }
          options={{
            title: 'MemesApp'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
