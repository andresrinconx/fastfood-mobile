import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../views/Home'
import FoodDetails from '../views/FoodDetails'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home} options={{title: 'Home'}} />
        <Stack.Screen name='FoodDetails' component={FoodDetails} options={{headerShown: false, title: 'FoodDetails' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation