import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tabs from './src/Navigation/Tabs'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <>
    <NavigationContainer>
    <Tabs/>
    </NavigationContainer>

    </>
  )
}

export default App

const styles = StyleSheet.create({})