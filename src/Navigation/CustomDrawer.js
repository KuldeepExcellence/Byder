// CustomDrawer.js
import React, { useEffect, useState, useContext } from 'react';
import { View, ImageBackground, Image, StyleSheet, Text, Modal, TouchableOpacity, Dimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { sidebarBlack } from '../Components/ColorConst/ColorConst';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


const CustomDrawer = (props) => {

  return (
    <>

      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: sidebarBlack, flex: 1 }}>
          <View style={styles.flexDir}>

            <Image source={require('../Assets/jacket.png')} style={styles.userImage} />

            <Text style={styles.text} numberOfLines={2}>Byder Team</Text>
            <Text style={styles.text2} numberOfLines={2}>byder.team@gmail.com</Text>
          </View>
          <View style={styles.borderWidth} />
          <DrawerItemList {...props} />
        </DrawerContentScrollView>

      </View>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexDir: {

    padding: 10,

    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  userImage: {
    height: hp('7%'),
    width: wp('14%'),
    borderRadius: 999,
  },
  TabIcon: {
    height: hp('6.4%'),
    width: wp('12.8%'),
    marginLeft: 20,
  },
  text: {
    color: '#fff',
    marginLeft: wp('0.4%'),
    fontSize: hp('2.2%'),
    fontWeight: '700',
    marginTop: hp('2%')
  },
  text2: {
    color: '#808080',
    fontSize: hp('1.8%'),
    fontWeight: '500',
    marginTop: hp('0.2%'),
    marginLeft: wp('0.4%'),
  },
  borderWidth: {
    width: wp('75%'),
    alignSelf: 'center',
    marginTop: hp('0.8%'),
    marginBottom: hp('2.1%'),
    borderWidth: 0.5,
    borderColor: '#808080',
  },
  logoutImage: {
    height: hp('3%'),
    width: wp('6%')
  },

});

export default CustomDrawer;
