import { StyleSheet, Text, View ,StatusBar,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { LightYellow, MainBlack, White } from '../../Components/ColorConst/ColorConst'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const CompareOnline = ({navigation}) => {
  return (
  <>
      <StatusBar backgroundColor={'#000'} />
      <View style={styles.man}>
    <View style={styles.Topimg}>
      <TouchableOpacity onPress={() => navigation.goBack()} >
    <Text style={styles.can} >Cancel</Text>
    </TouchableOpacity>
    <Text  style={styles.txtMain}>Comprar online</Text>
<TouchableOpacity onPress={()=>navigation.navigate('Submit')}>
    <Text style={styles.txtsub}>Submit</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={styles.main2}>
    <View  style={styles.txtman}>
        <Text  style={styles.txt5}>5% de reembolso{'\n'}
        Si comprar en tienda online,padras obtener el{'\n'}reembolso subiendo el ticket de compra en:
        {'\n'}{'\n'}Mi Perfil Mis Pedidos Pedido Subir Ticket</Text>
    </View>
    <View style={styles.maintic}>
        <View style={styles.tic}>
            <Image style={styles.imtic} source={require('../../Assets/tickblack.png')} />
  </View>
  <Text  style={styles.iE}>iEntendido!</Text>
    </View>
    <Text  style={styles.onof}>on_off</Text>
<View style={styles.mainontx}>
 <Text style={styles.txton}>ON</Text>
</View>
    </View>
  </>
  )
}
export default CompareOnline
const styles = StyleSheet.create({
    man:{
        backgroundColor:MainBlack,
        height:hp('4.5%'),
      },
      Topimg:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"flex-start",
      },
      txtMain:{
        fontSize:hp('2.4%'),
        color:White,
        fontWeight:'500',
        marginLeft:wp("18%")
      },
      can: {
        marginLeft:wp("3%"),
        fontSize:hp('2.2%'),
        fontWeight:'500',
        color:LightYellow,
      },
      bac:{
        color:LightYellow,
      },
      txtsub:{
        color:LightYellow,
        marginLeft:wp("16%"),
        fontSize:hp('2.2%'),
        fontWeight:'500',
      },
      main2: {
        flex: 1,
        backgroundColor: '#221D28',
        padding: 14,
        // height: hp('124%'),
    },
    txtman:{
        backgroundColor:'#332200',
        height:hp('15%'),
        width:wp('93%'),
        borderWidth: 3,
        borderColor: '#665200',
        borderRadius: 7,
    },
    txt5:{
        color:'#B38F00',
        padding: 10,
        fontWeight:'700',
        fontSize:hp('1.9%'),
    },
    tic:{
        backgroundColor:LightYellow,
        height:hp('2.5%'),
        width:wp('4.5%'),
        borderRadius: 3,
        marginTop:hp('3%'),
    },
    iE:{
        color:White,
        fontWeight:'700',
        fontSize:hp('2.1%'),
        marginLeft:wp("4%"),
        marginTop:hp('3%'),
    },
    maintic:{
        flexDirection:'row',
    },
    onof:{
        color: '#8C8C8C',
        fontWeight:'700',
        marginTop:hp('2.5%'),
    },
    mainontx:{
        backgroundColor:'#333333',
        height:hp('5%'),
        width:wp('93%'),
        borderRadius: 7,
        marginTop:hp('1%'),
    },
    txton:{
        color:White,
        fontSize:hp('2.1%'),
        fontWeight:'700',
        marginTop:hp('0.9%'),
        marginLeft:wp("2%"),
    },
    imtic:{
        height:hp('2%'),
        width:wp('3%'),
        marginLeft:wp("1%"),
    },
})