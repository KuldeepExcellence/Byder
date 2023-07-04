import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import Search from '../Screens/Search/Search';
import Waterdrop from '../Screens/Waterdrop/Waterdrop';
import Wishlist from '../Screens/Wishlist/Wishlist';
import Profile from '../Screens/Profile/Profile';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
 
  return (
  <>
  <Tab.Navigator>
    <Tab.Screen name='Home' component={Home} options={{ headerShown: false ,
       tabBarIcon: ({ color, focused }) =>
       <Image style={styles.tinyLogo} source={require('../Assets/home.png')} tintColor={focused ? '#FF66C4' : '#666666'}  />
     
      }}
       />
    <Tab.Screen name='Search' component={Search} options={{ headerShown: false ,
     tabBarIcon: ({ color, focused }) =>
     <Image style={styles.tinyLogo} source={require('../Assets/search.png')} tintColor={focused ? '#FF66C4' : '#666666'} />
    }}/>
    <Tab.Screen name='Waterdrop' component={Waterdrop} options={{ headerShown: false ,
     tabBarIcon: ({ color, focused }) =>
     <Image style={styles.tinyLogo} source={require('../Assets/drop.png')} tintColor={focused ? '#3399ff' : '#666666'} />
    }}/>
    <Tab.Screen name='Wishlist' component={Wishlist} options={{ headerShown: false,
      tabBarIcon: ({ color, focused }) =>
      <Image style={styles.tinyLogo} source={require('../Assets/heart-rate.png')} tintColor={focused ? '#FF66C4' : '#666666'} />
    }}/>
    <Tab.Screen name='Profile' component={Profile} options={{ headerShown: false ,
      tabBarIcon: ({ color, focused }) =>
      <Image style={styles.tinyLogo} source={require('../Assets/user.png')} tintColor={focused ? '#FF66C4' : '#666666'} />
    }}/>
  </Tab.Navigator>
  </>
  )
}

export default BottomTabs

const styles = StyleSheet.create({
  tinyLogo: {
    height: 24,
    width: 24,
  },
})