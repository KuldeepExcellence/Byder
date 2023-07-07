import { StyleSheet, Text, View, ScrollView, Image, FlatList,useWindowDimensions, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { Black, LightYellow, White } from './ColorConst/ColorConst';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Customcarousel = ({ data,navigation }) => {
    const Getdata = ({ item, index }) => {
        return (<>
          <View style={{ padding: 4}}>
            <View style={styles.maincard}>
              <View style={styles.Imagecontainer}>
                <View style={styles.mainpr}>
                <View style={styles.per}>
               <Text style={styles.txtper}>-40%</Text>
                </View>
                <View>
                  {/* <Image style={styles.heartim} source={require('../../Assets/heart.png')} /> */}
                </View>
                </View>
                <ImageBackground source={item.image} style={styles.image} />
              </View>
              <TouchableOpacity onPress={()=>navigation.navigate('Details')}>
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
        <ScrollView horizontal>
            {data.map((item, index) => {
                const { width } = useWindowDimensions();
                const SIZE = width * 0.7;
                return (
                    <View style={{ width: SIZE, padding: 5 }}>
                        {/* <View style={styles.maincard}>
                            <View style={styles.Imagecontainer}>
                                <ImageBackground source={item.image} style={styles.image} />
                                <TouchableOpacity onPress={()=>navigation.navigate('Details')}>
                                <Text style={styles.textColor}>BRADHY</Text>
                                <Text style={styles.txtclr}>Leggings Mocha</Text>
                                <Text style={styles.txtdlr}>49.70 €</Text>
                                <View style={styles.maintx}>
                                    <Text style={styles.txtclr}>Centro</Text>
                                <Text style={styles.txtclr}>7101.4km</Text>
                            </View>
                            </TouchableOpacity>
                            </View>
                        </View> */}
                          <FlatList
                          horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            // numColumns={3}
            keyExtractor={host_sublist => host_sublist.id}
            renderItem={({ item, index }) =>
              (<Getdata item={item} index={index}></Getdata>)} />
                    </View>
                )
            })}
        </ScrollView>
    )
}
export default Customcarousel
const styles = StyleSheet.create({
//     Imagecontainer: {
//         borderRadius: 20,
//         overflow: 'hidden',
//         padding: 2,
//         backgroundColor: 'grey',
//         height: 291,
//     },
//     image: {
//         width: '134%',
//         height: 200,
//         aspectRatio: 1,
//     },
//     textColor: {
//         color: LightYellow,
//         fontWeight: '500',
//         fontSize: 15
//     },
//     txtclr: {
//         color: White,
//         fontWeight: '500',
//         fontSize: 15
//     },
//     txtdlr: {
//         color: '#404040',
//         fontWeight: '500',
//         fontSize: 15
//     },
//     maintx:{
//   flexDirection:'row',
//   justifyContent:'space-between',
//   alignItems:'center',
//     },
maincard: {
    width: wp('47%'),
    borderRadius: 20,
    height: hp('30%'),
    backgroundColor: '#221D28',
    marginBottom: wp('2%'),
  },
  Imagecontainer: {
    width: wp('46.5%'),
    height: hp('20%'),
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    fontSize: 13
  },
  txtclr: {
    color: White,
    fontWeight: '500',
    fontSize: 10,
  },
  txtdlr: {
    color: '#404040',
    fontWeight: '500',
    fontSize: 12,
  },
  maintx: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtclr1:{
    color: White,
    fontWeight: '500',
    fontSize: 10,
    marginRight:hp('2%'),
  },
})





