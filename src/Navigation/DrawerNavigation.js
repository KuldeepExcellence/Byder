import { StyleSheet, Image, Text, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import MyProfile from '../DrawerNavigation/MyProfile/MyProfile'
// import HomeMain from './HomeMain/HomeMain';
import CustomDrawer from './CustomDrawer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BottomTabs from './Tabs';



const Drawer = createDrawerNavigator();  // create drawer navigation

const Home = (props) => {
  const Stack = createStackNavigator(); //create stack of screens




  return (

    <Stack.Navigator screenOptions={{ headerShown: false }} >
    
      <Stack.Screen name='HomeMain' component={HomeMain} />
      {/* <Stack.Screen name="ChooseServices" component={ChooseServices} options={{ headerShown: false }} /> */}
     
    </Stack.Navigator>
  )
}

const DrawerNavigation = (props, item) => {
 
  return (
    <Drawer.Navigator
      drawerContent={drawerProps => <CustomDrawer {...drawerProps} {...props} />}
      scr
      screenOptions={{
        drawerStyle: { backgroundColor: 'transparent' },
        headerShown: false,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
        drawerLabelStyle: {
          fontSize: hp('1.9%'),

        }
      }}
    >
      <Drawer.Screen name="BottomTabs" component={BottomTabs}
        // options={{
        //   drawerIcon: ({ color }) => (
        //     <Image style={styles.iconsPng} source={require('../../assets/home.png')} />
        //   ),
        // }}
      />
      {/* <Drawer.Screen name="MyProfile" component={MyProfile}
        // options={{
        //   drawerIcon: ({ color }) => (
        //     <Image style={styles.iconsPng} source={require('../../assets/userprofile.png')} />
        //   ),
        // }}
      /> */}

    </Drawer.Navigator>

  )
}





export default DrawerNavigation

const styles = StyleSheet.create({
  iconsPng: {
    height: hp('3.2%'),
    width: wp('6.4%')
  }

})