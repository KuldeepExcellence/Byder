import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { LightYellow, MainBlack, White } from '../../Components/ColorConst/ColorConst'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Login = ({ navigation }) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [email, setEmail] = React.useState('');
  return (
    <>
      <View style={styles.main}>
        <View style={styles.mainimg}>
          <Image style={styles.img} source={require('../../Assets/Logowithout.png')} />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.imgcl} source={require('../../Assets/close.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.txtby}>Byder</Text>
        <Text style={styles.txtEn}>Encuentra prendas cerca de ti. Introduce tu correo para create una cuenta</Text>
        <View style={styles.inputmain}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email address"
            placeholderTextColor={MainBlack}
          />
        </View>
        <View style={styles.mainconti}>
          <TouchableOpacity onPress={() => navigation.navigate('OtpVerify')}>
            <Text style={styles.txtconti}>Continue</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainsign}>
          <Image style={styles.imggo} source={require('../../Assets/googlelogo.png')} />
          <Text style={styles.txtsign}>Sign in with Google</Text>
        </View>
      </View>
    </>
  )
}
export default Login
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: LightYellow,
  },
  mainimg: {
    flexDirection: 'row',
  },
  img: {
    height: hp('13%'),
    width: wp('13%'),
    marginLeft: hp('22%'),
  },
  imgcl: {
    height: hp('5%'),
    width: wp('4%'),
    marginLeft: hp('18%'),
    marginTop: hp('3%'),
  },
  txtby: {
    color: MainBlack,
    fontSize: hp('8%'),
    fontWeight: '800',
    alignSelf: "center",
    marginTop: hp('16%'),
  },
  txtEn: {
    padding: 12,
    color: '#404040',
    fontSize: hp('2.4%'),
    // fontWeight:'400',
    alignSelf: 'center',
    // marginTop:hp('0.3%'),
  },
  inputmain: {
    padding: 22,
  },
  input: {
    backgroundColor: '#CCCCCC',
    height: 45,
    // margin: 12,
    borderWidth: 2,
    padding: 5,
    paddingLeft: 14,
    borderRadius: 10,
    borderColor: MainBlack,
  },
  mainconti: {
    marginLeft: hp('3%'),
    backgroundColor: MainBlack,
    height: hp('6%'),
    width: wp('89%'),
    borderRadius: 10,
    marginTop: hp('12%'),
  },
  txtconti: {
    color: White,
    fontSize: hp('2.2%'),
    alignSelf: "center",
    marginTop: hp('1.2%'),
    // fontWeight:'400',
  },
  mainsign: {
    flexDirection: 'row',
    marginLeft: hp('3%'),
    backgroundColor: MainBlack,
    height: hp('6%'),
    width: wp('89%'),
    borderRadius: 10,
    marginTop: hp('5%'),
  },
  txtsign: {
    color: White,
    fontSize: hp('2.2%'),
    alignSelf: "center",
    marginTop: hp('0.4%'),
    marginLeft: hp('2%'),
  },
  imggo: {
    height: hp('2.5%'),
    width: wp('5%'),
    marginTop: hp('1.8%'),
    marginLeft: hp('10%'),
  },
})