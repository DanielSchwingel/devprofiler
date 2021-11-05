import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from './src/screens/Login'
import { Home } from './src/screens/Home'

const Stack = createNativeStackNavigator()

function Routes() {
   return (
      <NavigationContainer>
         <Stack.Navigator 
            initialRouteName='home'
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