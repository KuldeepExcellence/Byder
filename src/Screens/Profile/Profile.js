import { StyleSheet, Text, View,StatusBar,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Topbar from '../../Components/Topbar';
import { MainBlack ,sidebarBlack,LightYellow} from '../../Components/ColorConst/ColorConst';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Profile = ({navigation}) => {
  return (
   <>
         <StatusBar backgroundColor={'#000'} />
      <View >
        <Topbar Textheading={'Mi Perfil'} navigation={navigation} />
        </View>
        <ScrollView style={styles.MainFlex}>
          <View style={styles.MainImgView}>
          <Image source={require('../../Assets/jacket.png')} style={styles.ProfileImg} />
            <View style={{marginLeft:hp('4.2%')}}>
            <Text style={styles.txtName}>Byder Team</Text>
            <Text style={[styles.txtName,{fontSize:hp('1.9%')}]}>Byderteam@gmail.com</Text>
            </View>
          
         
          </View>
          <View style={styles.hrWidth}/>
          <View style={styles.mainWallet}>
          <Text style={[styles.txtName,{marginTop:hp('1.2%')}]}>Byder Wallet</Text>
          <Text style={[styles.txtName,{marginTop:hp('0.1%'),fontSize: hp('2%'),color:'#737373'}]}>Reembolsis Acumulados</Text>
          <Text style={[styles.txtName,{marginTop:hp('0.4%'),fontSize: hp('3.8%'),color:LightYellow}]}>0.00 $</Text>
         <View>
          <TouchableOpacity style={styles.addWallet}>
          <Image source={require('../../Assets/dollar.png')} style={styles.dollarImg} />
          <Text style={[styles.txtName,{marginLeft:hp('1.4%'),fontSize: hp('2.1%'),color:LightYellow}]}>Transfeir a tu cuenta bancaria</Text>
          </TouchableOpacity>
          <View style={styles.viewmsg}>
           <Text style={styles.txtmsg}>Subo los Tickets da las compras</Text>
           <Text style={[styles.txtmsg,{fontSize:hp('1.9%')}]}>Hechas a traves Subo los Tickets da las compras</Text>
           <Text style={[styles.txtmsg,{fontSize:hp('1.9%')}]}>Subo los Tickets da las compras</Text>
           <Text style={[styles.txtmsg,{fontSize:hp('1.9%')}]}>psuedo da las compras</Text>
           <Text style={[styles.txtmsg,{fontSize:hp('2%'), marginTop:hp('2.1%')}]}>mis psuedo da las compras</Text>
          </View>
          <View style={styles.hrWidth}/>
         </View>

         {/* <TouchableOpacity style={styles.ListView} onPress={()=>navigation.navigate('Wishlist')}>
         <Text style={styles.txtList}>ListA de desoes</Text>
         <View style={styles.circleView}>
         <Image source={require('../../Assets/heart.png')} style={styles.ListImg} />
         </View>
         </TouchableOpacity> */}

         <TouchableOpacity style={styles.ListView} onPress={()=>navigation.navigate('ReserveOrder')}>
         <Text style={styles.txtList}>Mis Pedidos y  Reservas</Text>
         <View style={styles.circleView}>
         <Image source={require('../../Assets/writing.png')} style={styles.ListImg} />
         </View>   
         </TouchableOpacity>

         <TouchableOpacity style={styles.ListView} onPress={()=>navigation.navigate('EditPrefrence')}>
         <Text style={styles.txtList}>Mis Preferencias</Text>
         <View style={styles.circleView}>
         <Image source={require('../../Assets/adjust.png')} style={styles.ListImg} />
         </View>   
         </TouchableOpacity>
         <View style={styles.hrWidthsecond}/>

         <TouchableOpacity style={styles.ListView}onPress={()=>navigation.navigate('Support')}>
         <Text style={styles.txtList}>?Preguntas ?</Text>
         <View style={styles.circleView}>
         <Image source={require('../../Assets/telephone.png')} style={styles.ListImg} />
         </View>   
         </TouchableOpacity>

         <View style={{marginBottom:65}}/>

          </View>
       

        </ScrollView>
   </>
  )
}

export default Profile

const styles = StyleSheet.create({
  MainFlex: {
    flex: 1,
    backgroundColor: '#15181e',
    padding: 10
  },
  MainImgView:{
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ProfileImg:{
    height: hp('8%'),
    width: wp('16%'),
    borderRadius:999,
    marginVertical:hp('1.2%')
  },
  txtName:{
    fontSize: hp('2.4%'),
    color: 'white',
    fontWeight:"700",
    fontFamily: 'Avenir',
    textShadowColor: 'black',
  },
  hrWidth:{
    height: hp('0.3%'),
    width: wp('91.5%'),
    backgroundColor: '#737373',
    marginTop:hp('2.2%'),
    // marginLeft:hp('2.2%'),
    alignSelf:'center'
  },
  hrWidthsecond:{
    height: hp('0.3%'),
    width: wp('91.5%'),
    backgroundColor: '#737373',
    marginTop:hp('2.2%')
  },
  mainWallet:{
    // justifyContent: 'center',
    alignItems: "flex-start",
    paddingLeft:8
  },
  txtName:{
    fontSize: hp('2.4%'),
    color: 'white',
    fontWeight:"700",
    fontFamily: 'Avenir',
    textShadowColor: 'black',
  },
  addWallet:{
    flexDirection:'row',
    height: hp('5.6%'),
    width: wp('92.5%'),
    borderWidth:1,
    borderColor:LightYellow,
    borderRadius:10,
    // backgroundColor: '#737373',  
    marginTop:hp('2.2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

 dollarImg:{
    height: hp('3%'),
    width: wp('6%'),
  },
  viewmsg:{
    height: hp('18.6%'),
    width: wp('92.5%'),
    marginTop:hp('2.2%'),
    borderWidth:1,
    borderColor:'#5f6560',
    borderRadius:10,
    backgroundColor:'#16191f',
    padding:8
  },
  txtmsg:{
    fontSize: hp('2%'),
    color: 'white',
    fontWeight:"600",
  },
  ListView:{
    flexDirection:'row',
    justifyContent: "space-between",
    alignItems: 'center',
    width: wp('92.5%'),
    marginVertical:hp('1.4%'),
    borderRadius:10,
  
  },
  circleView:{
    height: hp('5%'),
    width: wp('10%'),
    justifyContent: "center",
    alignItems: 'center',
    borderRadius:999,
    backgroundColor:'#556562eb',
     marginRight:4,
  },
  txtList:{
    fontSize: hp('2.1%'),
    color: 'white',
    fontWeight:"700",
  },
  ListImg:{
    height: hp('2.5%'),
    width: wp('5%'),
    tintColor:LightYellow
  },
})