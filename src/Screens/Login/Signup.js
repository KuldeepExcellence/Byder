import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { LightYellow, MainBlack, White } from '../../Components/ColorConst/ColorConst'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';
import { Baseurl } from '../../Components/Baseurl';

const Login = ({ navigation }) => {

  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const PostData = () => {

    if (!email) {
      Toast.show({
        onPress: () => { Toast.hide() },
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: 'Enter Email'
      })
    
    } else if (!password) {
      Toast.show({
        onPress: () => { Toast.hide() },
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: 'Enter Paswword',
      })
    
    }

    else {
      // setModalVisible(true)
      let formData = new FormData();
      formData.append('email', email)
      formData.append('password', password)


      fetch(base + '/api/signup/', {
        method: 'Post',
        headers: {
          "Accept": "application/json",
          "Content-Type": "multipart/form-data",
          // "Authorization": "token " + userToken
        },
        body: formData
      }).then((result) => {
        result.json().then((response) => {
          // setModalVisible(false)
          // console.log(response.id, "Response");
          // navigation.navigate('PriceOverView', { abbb: response.id, listId })
        }).catch((err) => {
          // setModalVisible(false)
          console.log(err)
        })
      })

    }


  }


  return (
    <>
      <Root>
      <View style={styles.main}>
        <ScrollView>

          <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'flex-end' }}>
            <Image style={styles.imgcl} source={require('../../Assets/close.png')} />
          </TouchableOpacity>
          <View style={styles.mainimg}>
            <Image style={styles.img} source={require('../../Assets/Logowithout.png')} />

          </View>
          <View style={styles.txtLogo}>
            <Text style={styles.txtby}>Byder</Text>
            <Text style={styles.txtEn}>Encuentra prendas cerca de ti. Introduce tu correo para create una cuenta</Text>
          </View>
           <View style={styles.inputmain}>
            <TextInput
              style={styles.input}
              onChangeText={setUserName}
              value={userName}
              placeholder="Username"
              placeholderTextColor={MainBlack}
            />
          </View>
          <View style={styles.inputmain}>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Email address"
              placeholderTextColor={MainBlack}
            />
          </View>
          <View style={styles.inputmain}>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              placeholderTextColor={MainBlack}
            />
          </View>
         
          <TouchableOpacity onPress={() => PostData()} style={styles.mainconti}>
              <Text style={styles.txtconti}>Continue</Text>
            </TouchableOpacity>
       
          <View style={styles.mainsign}>
            <Image style={styles.imggo} source={require('../../Assets/googlelogo.png')} />
            <Text style={styles.txtsign}>Sign in with Google</Text>
          </View>
          <View style={{alignitems:"center",justifyContent:"center",flexDirection:'row'}}>

          <Text style={styles.smltxt}>Allready have an Account  </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
          <Text style={[styles.smltxt,{color:'#ff7674'}]}>Login</Text>
          </TouchableOpacity>
       
          </View>
        </ScrollView>
      </View>
      </Root>
    </>
  )
}
export default Login
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#dafda5',
    padding: 25,
  },
  mainimg: {
    alignitems: 'center',
    justifyContent: 'center',
    marginTop: hp('-3%'),
  },
  img: {
    height: hp('18%'),
    width: wp('36%'),
    alignSelf: "center",
  },
  imgcl: {
    height: hp('5%'),
    width: wp('4%'),

  },
  txtLogo: {
    alignitems: 'center',
    justifyContent: 'center',
  },
  txtby: {
    color: MainBlack,
    fontSize: hp('8%'),
    fontWeight: '800',
    alignSelf: "center",
    marginTop: hp('4%'),
  },
  txtEn: {
   
    color: '#404040',
    fontSize: hp('2.2%'),
    alignSelf: 'center',
  },
  inputmain: {
    marginTop: hp('2%'),
  },
  input: {
    backgroundColor: '#a4be7c',
    height: 45,
    borderWidth: 1.4,
    padding: 5,
    paddingLeft: 14,
    borderRadius: 8,
    borderColor: MainBlack,
  },
  mainconti: {
    backgroundColor: '#839863',
    height: hp('6%'),
    width: wp('86%'),
    borderRadius: 8,
    marginTop: hp('6%'),
    alignSelf: 'center',
    alignitems: 'center',
    justifyContent: 'center',
  },
  txtconti: {
    color: '#e9fec9',
    fontSize: hp('2.2%'),
    alignSelf: "center",
  },
  mainsign: {
    flexDirection: 'row',
    marginLeft: hp('0.5%'),
    backgroundColor: MainBlack,
    height: hp('6%'),
    width: wp('85%'),
    borderRadius: 8,
    marginTop: hp('2%'), 
  },
  smltxt:{
    color: '#000',
    fontSize: hp('2%'),
    marginTop: hp('2%'),
    // alignSelf: "center",
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