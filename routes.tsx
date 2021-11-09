import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Login } from './src/screens/Login'
import { Home } from './src/screens/Home'

const Stack = createStackNavigator()

function Routes() {
   return (
      <NavigationContainer>
         <Stack.Navigator 
            initialRouteName='login'
            screenOptions={{
               headerShown: false
            }}
         >
            <Stack.Screen name='login' component={Login} />
            <Stack.Screen name='home' component={Home} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export { Routes }