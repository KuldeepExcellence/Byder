import { StyleSheet, Text, View ,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const CustombrandSubCat = ({navigation,actionSheetSubCategory}) => {
  return (
   <>
     <View style={styles.topmain}>
      <View style={styles.txttop}>
      <Text style={styles.txt}>
      Eligle una o mas categorias
     </Text>
   <TouchableOpacity onPress={()=> actionSheetSubCategory.current?.hide()}>
   <Text style={styles.txtd}>
      Done
     </Text>
   </TouchableOpacity>
  </View>
</View>
<ScrollView>
<View style={styles.main}>
  <View style={styles.textmain}>
  <Text style={styles.txtropa}>ROPA</Text>
  <View style={styles.hrline} />
  <Text style={styles.txtcal}>CALZADO</Text>
  <View style={styles.hrline} />
  <Text style={styles.txtacc}>ACCESORIES</Text>
  <View style={styles.hrline} />
  <Text style={styles.txtjoyas}>JOYAS</Text>
  <View style={styles.hrline} />
  </View>
  </View>
</ScrollView>
   </>
  )
}
export default CustombrandSubCat
const styles = StyleSheet.create({
  topmain:{
    backgroundColor:"black",
    height:hp('5%'),
  },
  txttop:{
    flexDirection:'row',
    // justifyContent:'center',
    // alignItems:"center",
      },
      txt:{
        color:'white',
        marginLeft:hp("15%"),
        marginTop:hp('1%'),
      },
      txtd:{
        color:'#DAFDA5',
        marginTop:hp('1%'),
    marginLeft:hp("8%"),
      },
      main:{
        // flex:1,
        backgroundColor:"#333333",
        height:hp('90%'),
      },
      textmain:{
        padding:14,
      },
      txtropa:{
        color:'white',
        fontSize:hp('2.3%'),
      },
      hrline: {
        height: hp('0.05%'),
        width: wp('94%'),
        backgroundColor: '#fff',
        marginTop: hp('1.1%'),
    alignSelf:'center'
      },
      txtcal:{
        marginTop:hp('2%'),
        color:'white',
        fontSize:hp('2.3%'),
      },
      txtacc:{
        marginTop:hp('2%'),
        color:'white',
        fontSize:hp('2.3%'),
      },
      txtjoyas:{
        marginTop:hp('2%'),
        color:'white',
        fontSize:hp('2.3%'),
      },
})