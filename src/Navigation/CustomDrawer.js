// CustomDrawer.js
import React, { useEffect, useState, useContext } from 'react';
import { View, ImageBackground, Image, StyleSheet, Text, Modal,TouchableOpacity, Dimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


const CustomDrawer = (props) => {

//   const Logconfirm = () => {



//     Dialog.show({
//       type: ALERT_TYPE.DANGER,
//       title: 'Alert',
//       textBody: 'Are You Sure Want To Logout The Application',
//       button: 'Logout',
//       onPressButton: () => { logout(), Dialog.hide() }
//     })


//   }


  return (
    <>

        <View style={{ flex: 1 }}>
          <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#143455', borderTopRightRadius: 25, borderBottomRightRadius: 33, flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
              {/* <View style={styles.flexDir}>
                {userdata.profile_image ==null ?
                 <Image source={frontimage1} style={styles.userImage} />
                 :
                 <Image source={{ uri: BaseUrl + userdata.profile_image }} style={styles.userImage} />
                
                }
               
                <Text style={styles.text} numberOfLines={2}>{userdata.fullname}{'\n'}<Text style={styles.text2}>{userdata.username}</Text></Text>
              </View> */}
              <View>

                {/* <Image source={require('../../assets/TabIcon.png')} style={styles.TabIcon} /> */}

              </View>
            </View>

            <View style={styles.borderWidth} />
            <ImageBackground source={require('../Assets/plussign.png')} style={styles.backroundImage} />
            <View style={styles.logoutMain}>
              <View style={styles.borderWidth2} />
              <Pressable onPress={() => setModalVisibleAlert(!modalVisibleAlert)} style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp('1.4%'), justifyContent: 'flex-start' }} >
                <Image source={require('../Assets/plussign.png')} style={styles.logoutImage} />
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: '600', marginLeft: wp('2%') }}>Logout</Text>
              </Pressable>
            </View>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>

          {/* <Modal
          // backdropOpacity={0.3}
        animationType="slide"
        transparent={true}
        visible={modalVisibleAlert}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleAlert(!modalVisibleAlert);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are You Sure Want to Logout from Application ?</Text>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisibleAlert(!modalVisibleAlert)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonlog]}
              onPress={() => logout()}>
              <Text style={styles.textStyle}>Logout</Text>
            </Pressable>
            </View>
          
          </View>
        </View>
      </Modal> */}

        </View>
    
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexDir: {
    flexDirection: 'row',
    padding: 10,
    marginLeft: wp('2%'),
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  userImage: {
    height: hp('11%'),
    width: wp('22%'),
    borderRadius: 999,
  },
  TabIcon: {
    height: hp('6.4%'),
    width: wp('12.8%'),
    //  position:'absolute',
    marginLeft: 20,
    // marginTop:50
  },
  text: {
    color: '#01AED8',
    marginLeft: wp('2.2%'),
    fontSize: hp('2.2%'),
    fontWeight: '500',

  },
  text2: {
    color: '#fff',
    fontSize: hp('1.8%'),
    fontWeight: '500',
  },
  borderWidth: {
    width: wp('65%'),
    alignSelf: 'center',
    marginTop: hp('0.8%'),
    marginBottom: hp('2.1%'),
    borderWidth: 0.5,
    borderColor: '#01AED8',
  },
  logoutImage: {
    height: hp('3%'),
    width: wp('6%')
  },
  logoutMain: {
    position: 'absolute',
    marginTop: hp('86%'),
    padding: 30,
  },
  borderWidth2: {
    width: wp('63%'),
    borderWidth: 0.4,
    borderColor: '#fff',

  },
  backroundImage: {
    width: '100%',
    marginTop: hp('8.8%'),
    height: hp('91%'),
    position: 'absolute',

  },
  centeredView:{
    flex:1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },

  modalView: {
    margin: 20,
    width:wp('88%'),
    height:hp('35%'),
    alignSelf:'center',
    marginTop:hp('35%'),
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 12,
    padding: 10,
    elevation: 2,
    width:wp('35%'),
    height:hp('7%'),
    marginTop:hp('7%'),
    alignItems:'center',
    justifyContent:'center'
  },
  modalText:{
    fontSize:hp('2.3%'),
    fontWeight:'600',
    color:'#000',
    marginTop:hp('3%')
  },
  buttonlog: {
    backgroundColor: '#ff1a1a',
    marginLeft:wp('4.1%')
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle:{
    fontSize:hp('2.3%'),
    fontWeight:'600',
    color:'#fff'

  },
});

export default CustomDrawer;
