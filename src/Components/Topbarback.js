import { StyleSheet, Text, View,Image , TouchableOpacity} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { White } from './ColorConst/ColorConst';
import { MainBlack } from './ColorConst/ColorConst';
import { LightYellow } from './ColorConst/ColorConst';
const Topbarback = ({Textheading,navigation}) => {
  return (
   <>
   {/* <View style={styles.man}> */}
    <View style={styles.Topimg}>
      <TouchableOpacity onPress={() => navigation.goBack()} >
    <Image style={styles.backim} source={require('../Assets/left.png')}  tintColor={LightYellow} />
    </TouchableOpacity>
 <Text style={styles.bac}>Back</Text>
    <Text  style={styles.txtMain}>{Textheading}</Text>
    </View>
    {/* </View> */}
   </>
  )
}
export default Topbarback
const styles = StyleSheet.create({
    man:{
        backgroundColor:MainBlack,
      },
      Topimg:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"flex-start",
      },
      txtMain:{
        fontSize:hp('2.4%'),
        color:White,
        fontWeight:'700',
        marginLeft:wp("26%")
      },
      backim: {
        width: wp('6%'),
        height: hp('4%'),
      },
      bac:{
        color:LightYellow,
      },
})