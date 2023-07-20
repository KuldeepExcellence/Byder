
import { StyleSheet, Text, View, StatusBar, ScrollView, Image,TouchableOpacity, TextInput } from 'react-native'
import React,{useState} from 'react'
import Topbarback from '../../Components/Topbarback'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MainBlack, White } from '../../Components/ColorConst/ColorConst';
import ImageCropPicker from 'react-native-image-crop-picker';


const SubmitCompareTicket = ({ navigation }) => {
  const [frontimage, setFrontimage] = useState(null);
    const [showoption, setShowoption] = useState(false);

    const openGalleryFron = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(frontimage => {
            console.log(frontimage);
            setShowoption(false)
            setFrontimage(frontimage.path)
        });
    }
  return (
    <>
      <StatusBar backgroundColor={'#000'} />
      <Topbarback Textheading={'Subir ticket de compra'} navigation={navigation} />
      <View style={styles.main2}>
        <Text style={styles.subti}>Subir ticket </Text>

        <View style={styles.searcmain}>
          <View style={styles.srchmainim}>
            <TouchableOpacity onPress={() => openGalleryFron()}>
            {frontimage ?
            <Image source={{ uri: frontimage }} style={styles.srchim} />
            :
              <Image style={styles.srchim} source={require('../../Assets/camera.png')} tintColor='#959596' />
            }
              </TouchableOpacity>
            <Text style={styles.input} >Choose an Image</Text>
            <TouchableOpacity onPress={() => setFrontimage(null)}>
            <Image style={styles.crossimg} source={require('../../Assets/cross.png')} tintColor='#959596' />
            </TouchableOpacity>
          </View>
        </View>

      
      </View>
    </>
  )
}
export default SubmitCompareTicket
const styles = StyleSheet.create({
  main2: {
    flex: 1,
    backgroundColor: '#15181e',
    padding: 10,
    // height: hp('124%'),
  },
  subti: {
    color: '#727375',
    fontSize: hp('1.9%'),
    fontWeight: '600',
    marginLeft: hp('0.6%'),
  },
  searcmain: {
    height: hp('6%'),
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#272a30',
    width: wp('93%'),
    marginTop: hp('0.6%'),
    marginLeft: hp('0.6%'),
    borderRadius: 10,
  },
  srchmainim: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: hp('1.2%'),
    marginRight: hp('1.8%'),
    justifyContent: "space-between",
  },

  srchim: {
    height: hp('3.5%'),
    width: wp('7%'),
    // marginTop: hp('1.2%'),
    marginLeft: hp('1%'),
    alignSelf:'center'
  },
  
crossimg:{
  height: hp('2.5%'),
  width: wp('5.2%'),
  // marginTop: hp('1.2%'),
  marginLeft: hp('1%'),
  alignSelf:'center'
},
  input: {
    color: '#959596',
    width: wp('50%'),
    marginLeft: hp('-6.7%'),
    alignSelf:'center',
    fontWeight:'600'
    
  },
  hrline: {
    height: hp('0.2%'),
    width: wp('92%'),
    backgroundColor: '#333333',
    marginTop: hp('-2%'),
    alignSelf: 'center',
  },
})