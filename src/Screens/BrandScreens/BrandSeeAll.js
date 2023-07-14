import { StyleSheet, Text, View, StatusBar, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Topbarback from '../../Components/Topbarback'
import { ScrollView } from 'react-native-gesture-handler'
import { LightYellow, MainBlack, White } from '../../Components/ColorConst/ColorConst'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const BrandSeeAll = ({ navigation }) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
    <>
      <StatusBar backgroundColor={'#000'} />
      <Topbarback navigation={navigation} />
      
      <View style={styles.searcmain}>
          <View style={styles.srchmainim}>
            <View style={styles.serchm}>
              <Image style={styles.srchim} source={require('../../Assets/searchwhite.png')} />
            </View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Search"
              placeholderTextColor={'#737373'}
            />
          </View>
        </View>
      <ScrollView>
       
        <View style={styles.main}>
          <TouchableOpacity style={styles.mnboxf} onPress={() => navigation.navigate('BrandDetail')}>
            <View>
              <Text style={styles.txt22}>
                220V
              </Text>
              <Text style={styles.txt68}>
                -68%
              </Text>
            </View>
            <View style={styles.mainbox}>
              <Text style={styles.boxtxt}>220V</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.hrline} />

          <View style={styles.mnboxf}>
            <View>
              <Text style={styles.txt22}>
                40S&SHORTIES
              </Text>
              <Text style={styles.txt68}>
                -40%
              </Text>
            </View>
            <View style={styles.mainbox}>
              <Text style={styles.boxtxt4}>40s & SHORTIES</Text>
            </View>
          </View>
          <View style={styles.hrline} />
        </View>
      </ScrollView>
    </>
  )
}
export default BrandSeeAll
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#15181e',
  },
  input: {
    backgroundColor: '#333333',
    height: 36,
    width: wp('84%'),
    // borderWidth: 1,
    // padding: 8,
    // paddingLeft: 18,
    marginLeft: hp('-2.4%'),
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp('0.6%'),
    border: 'none',
  },
  searcmain: {
    backgroundColor: MainBlack,
    height: hp('7%'),
  },
  main: {
    backgroundColor: '#15181e',
   flex:1,
   flexGrow: 1,
  },
  txt22: {
    color: White,
    fontSize: hp('2.3%'),
    fontWeight: '700',
  },
  txt68: {
    color: '#808080',
  },
  mainbox: {
    backgroundColor: White,
    height: hp('8%'),
    width: wp('18%'),
    borderRadius: 6,
  },
  boxtxt: {
    color: MainBlack,
    alignSelf: 'center',
    marginTop: hp('2.6%'),
  },
  mnboxf: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hrline: {
    height: hp('0.2%'),
    width: wp('92%'),
    backgroundColor: '#23262c',
    // marginTop: hp('1%'),
    alignSelf: 'center',
  },
  boxtxt4: {
    color: MainBlack,
    alignSelf: 'center',
    marginTop: hp('2.6%'),
    fontSize: hp('1.2%'),
    fontWeight: '700',
  },
  srchim: {
    height: hp('2.5%'),
    width: wp('5.2%'),
    marginTop: hp('1%'),
    marginLeft: hp('0.8%'),
  },
  srchmainim: {
    flexDirection: 'row',
  },
  serchm: {
    height: 36,
    backgroundColor: '#333333',
    width: wp('12%'),
    marginTop: hp('0.6%'),
    marginLeft: hp('2%'),
    borderRadius: 10,
  },
})