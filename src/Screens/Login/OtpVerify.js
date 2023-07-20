import { StyleSheet, Text, View ,Image,TouchableOpacity,TextInput} from 'react-native'
import React from 'react'
import { LightYellow, MainBlack, White } from '../../Components/ColorConst/ColorConst'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const OtpVerify = ({navigation}) => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.main}>
    <View style={styles.mainimg}>
<Image style={styles.img} source={require('../../Assets/Logowithout.png')}/>
<TouchableOpacity  onPress={() => navigation.goBack()}>
<Image style={styles.imgcl} source={require('../../Assets/close.png')}/>
</TouchableOpacity>
</View>
<Text style={styles.pintxt}>
    We've sent a pin to abc@gmail.com
</Text>
<Text style={styles.pintxt2}>
  Check your spam folder if you don't receive it.
</Text>
<View style={styles.inputmain}>
<TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter pin"
        placeholderTextColor={MainBlack}
      />
</View>
<View style={styles.mainconti}>
<Text style={styles.txtconti}>Continue</Text>
</View>
<TouchableOpacity onPress={()=>navigation.navigate('Login')}>
<Text style={styles.anpintxt}>
 I need another pin
</Text>
</TouchableOpacity>
</View>
  )
}
export default OtpVerify
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:LightYellow,
    },
    mainimg:{
        flexDirection:'row',
    },
    img:{
        height:hp('13%'),
        width:wp('13%'),
       marginLeft:hp('22%'),
    },
    imgcl:{
        height:hp('5%'),
        width:wp('4%'),
       marginLeft:hp('18%'),
       marginTop:hp('3%'),
    },
    pintxt:{
        color:MainBlack,
        alignSelf:'center',
        fontSize:hp('2.3%'),
        marginTop:hp('16%'),
    },
    pintxt2:{
        color:MainBlack,
        alignSelf:'center',
        fontSize:hp('2.3%'),
        marginTop:hp('3%'),
    },
    inputmain:{
        padding:26,
    },
    input: {
        backgroundColor:'#CCCCCC',
        height: 45,
        // margin: 12,
        borderWidth: 2,
        padding: 5,
        paddingLeft: 14,
        borderRadius:10,
        borderColor:MainBlack,
      },
      mainconti:{
        marginLeft:hp('3%'),
        backgroundColor:'#CCCCCC',
        height:hp('6%'),
        width:wp('89%'),
        borderRadius:10,
        marginTop:hp('14%'),
      },
      txtconti:{
        color:White,
        fontSize:hp('2.2%'),
        alignSelf:"center",
        marginTop:hp('1.2%'),
        // fontWeight:'400',
       },
       anpintxt:{
        color:MainBlack,
        alignSelf:'center',
        fontSize:hp('2.4%'),
        marginTop:hp('2%'),
       },
})