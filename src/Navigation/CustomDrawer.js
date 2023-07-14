// CustomDrawer.js
import React, { useEffect, useState, useContext } from 'react';
import { View, ImageBackground, Image, StyleSheet, Text, Modal, TouchableOpacity, Pressable, Dimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { sidebarBlack } from '../Components/ColorConst/ColorConst';
import { useNavigation } from '@react-navigation/native';
// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


const CustomDrawer = (props) => {

  const navigation = useNavigation();

  return (
    <>

      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: sidebarBlack, flex: 1 }}>
          <Pressable style={styles.flexDir} onPress={()=> navigation.navigate('SidebarProfile')}>

            <Image source={require('../Assets/prIcon.png')} style={styles.userImage}  tintColor='#dafda5'/>

            <Text style={styles.text} numberOfLines={2}>Byder Team</Text>
            <Text style={styles.text2} numberOfLines={2}>byder.team@gmail.com</Text>
          </Pressable>
          <View style={styles.borderWidth} />
          <DrawerItemList {...props} />



          <Pressable onPress={() => navigation.navigate('About')} style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp('1.4%'), marginLeft: wp('5.4%'), justifyContent: 'flex-start' }} >
            <Image source={require('../Assets/About-out.png')} style={styles.logoutImage} tintColor='#fff' />
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: '600', marginLeft: wp('7%') }}>About</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('SignOut')} style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp('2.6%'), marginLeft: wp('5.4%'), justifyContent: 'flex-start' }} >
            <Image source={require('../Assets/logout.png')} style={styles.logoutImage} tintColor='#fff' />
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: '600', marginLeft: wp('7%') }}>Sign Out</Text>
          </Pressable>
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
    height: hp('2.5%'),
    width: wp('5%')
  },

});

export default CustomDrawer;
