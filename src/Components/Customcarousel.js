import { StyleSheet, Text, View, ScrollView, Image, FlatList, useWindowDimensions, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { Black, LightYellow, White } from './ColorConst/ColorConst';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Customcarousel = ({ data, navigation }) => {


  const Getdata = ({ item, index }) => {
  
    // console.log(imagesLink, '1111item')
    const imageUrls = item.images.split('|');

    return (<>
      <View style={{ padding: 6 }}>
        <TouchableOpacity onPress={() => navigation.navigate('DetailSearch',{item})} style={styles.maincard}>
          <View style={styles.Imagecontainer}>
         
            {imageUrls.map((imageUrl, index) => (
             
              <ImageBackground key={index} source={{ uri: imageUrl }} style={styles.image} >
                {item.discount == null ? null :
                  <View style={styles.per}>
                    <Text style={styles.txtper}>{item.discount}%</Text>
                  </View>
                }
                <View/>
    
                  <Image style={styles.heartim} source={require('../Assets/heart.png')} />
                
              </ImageBackground>
           
            ))}
             
          </View>
          <View>
            <View style={{ marginLeft: hp('2%') }}>
              <Text style={styles.textColor}>{item.brand}</Text>
              <Text style={styles.txtclr} numberOfLines={2}>{item.name}</Text>
              <Text style={styles.txtdlr}>{item.current_price} €</Text>
              <View style={styles.maintx}>
                <Text style={styles.txtclr}>{item.shop}</Text>
                <Text style={styles.txtclr1}>7101.4km</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
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
    height: hp('35.5%'),
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
    overflow:'hidden',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  mainpr: {
    padding: 10,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('-10.2%'),
  },
  per: {
    backgroundColor: LightYellow,
    width: wp('8.8%'),
    height: hp('2.5%'),
    borderRadius: 7,
    marginLeft: hp('0.8%'),
    marginTop: hp('0.8%'),
  },
  txtper: {
    fontSize: 12,
  },
  heartim: {
    height: hp('3%'),
    width: wp('5.7%'),
    // alignContent:'flex-end',
    marginRight: hp('0.8%'),
    marginTop: hp('0.8%'),
  },

  image: {
    flexDirection:'row',
    justifyContent: 'space-between',
    width: wp('46%'),
    height: hp('19.9%'),
  //  marginLeft:hp('1.3%'),
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
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
    fontSize: hp('1.9%'),
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
  txtclr1: {
    color: White,
    fontWeight: '500',
    fontSize: hp('1.8%'),
    marginRight: hp('2%'),
  },
})





