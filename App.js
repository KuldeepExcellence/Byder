import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tabs from './src/Navigation/Tabs'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigation from './src/Navigation/MainNavigation'

const App = () => {
  return (
   
    <NavigationContainer>
    <MainNavigation/>
    </NavigationContainer>

   
  )
}

export default App


