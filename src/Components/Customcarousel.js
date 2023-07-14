import { StyleSheet, Text, View, ScrollView, Image, FlatList, useWindowDimensions, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { Black, LightYellow, White } from './ColorConst/ColorConst';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Customcarousel = ({ data, navigation }) => {
  const Getdata = ({ item, index }) => {
    return (<>
      <View style={{ padding: 6 }}>
        <View style={styles.maincard}>
          <View style={styles.Imagecontainer}>
            <View style={styles.mainpr}>
              <View style={styles.per}>
                <Text style={styles.txtper}>-40%</Text>
              </View>
              <View>
                <Image style={styles.heartim} source={require('../Assets/heart.png')} />
              </View>
            </View>
            <ImageBackground source={item.image} style={styles.image} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('DetailSearch')}>
            <View style={{ marginLeft: hp('2%') }}>
              <Text style={styles.textColor}>BRADHY</Text>
              <Text style={styles.txtclr}>Leggings Mocha</Text>
              <Text style={styles.txtdlr}>49.70 €</Text>
              <View style={styles.maintx}>
                <Text style={styles.txtclr}>Centro</Text>
                <Text style={styles.txtclr1}>7101.4km</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>)
  };
  return (


    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item, index }) =>
        (<Getdata item={item} index={index}></Getdata>)} />
  )
}
export default Customcarousel
const styles = StyleSheet.create({

  maincard: {
    width: wp('47%'),
    borderRadius: 10,
    height: hp('33.5%'),
    backgroundColor: '#1e222b',
    marginBottom: wp('2%'),
  },
  Imagecontainer: {
    width: wp('46.5%'),
    height: hp('20%'),
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  mainpr:{
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:hp('-10.2%'),
  },
  per:{
    backgroundColor:LightYellow,
    width:wp('8.8%'),
    height:hp('2.5%'),
    borderRadius:7,
  },
  txtper:{
    fontSize: 12,
  },
  heartim:{
    height:hp('3%'),
    width:wp('5.7%'),
  },
  image: {
    width: wp('44%'),
    height: hp('19.5%'),
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    borderRadius: 30,
    position: 'absolute',
    // aspectRatio: 1,
  },
  textColor: {
    color: LightYellow,
    fontWeight: '500',
    fontSize: hp('1.9%'),
    marginTop: hp('0.4%'),
  },
  txtclr: {
    color: White,
    fontWeight: '500',
    fontSize: hp('2.1%'),
    marginTop: hp('0.1%'),
  },
  txtdlr: {
    color: '#616267',
    fontWeight: '500',
    fontSize: hp('1.9%'),
    marginTop: hp('0.1%'),
  },
  maintx: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtclr1:{
    color: White,
    fontWeight: '500',
    fontSize: hp('1.8%'),
    marginRight:hp('2%'),
  },
})





