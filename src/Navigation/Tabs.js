import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
  <>
    <Tab.Navigator 
    tabBarOption={{
      activeTintColor:"#1a1a1a",
    }}
   screenOptions={{
    headerStyle:{
      backgroundColor:'#1a1a1a', 
      // activeTintColor:"white",
    },
    headerTitleStyle: {
      color: 'white'
    },
    tabBarStyle: {
      backgroundColor: '#1a1a1a',
  },


   }}

    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color, focused }) =>
          <Image style={styles.tinyLogo} source={require('../Assets/plussign.png')} tintColor={focused ? '#3399ff' : '#666666'} />
      
        // headerShown: false,
      }}
      />
      {/* <Tab.Screen name="TV Tracker" component={Home}/> */}

      {/* <Tab.Screen name="Countdown" component={Countdown} options={{
        tabBarIcon: ({ color, focused }) =>
          <Image style={styles.tinyLogo} source={require()} tintColor={focused ? '#3399ff' : '#666666'} />,
          // header: props => <CustomHeader {...props} />,
        headerShown: false,
      }}
      />

      <Tab.Screen name="Find" component={Find} options={{
        tabBarIcon: ({ color, focused }) =>
          <Image style={styles.tinyLogo} source={require()} tintColor={focused ? '#3399ff' : '#666666'} />
        
        // headerShown: false,
      }}
      />

      <Tab.Screen name="More" component={More} options={{
        tabBarIcon: ({ color, focused }) =>
          <Image style={styles.tinyLogo} source={require()} tintColor={focused ? '#3399ff' : '#666666'} />
        
        
        // headerShown: false,
      }}
      /> */}


    </Tab.Navigator>
  
  </>
  )
}

export default Tabs

const styles = StyleSheet.create({})