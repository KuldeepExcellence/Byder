import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LightYellow, MainBlack, White } from '../../Components/ColorConst/ColorConst'
import Topbar from '../../Components/Topbar'
import Inputsearch from '../../Components/Inputsearch'
import ToggleSwitch from 'toggle-switch-react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Cards from '../../Components/Cards'
import { resizeMode } from 'deprecated-react-native-prop-types/DeprecatedImagePropType'
import { ScrollView } from 'react-native-gesture-handler'
import DetailSearch from '../../DetailSearch/DetailSearch'

const data1 = [
  {

    image: require('../../Assets/image1.png'),
  },
  {
    // title: "In turpis",
    // body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    image: require('../../Assets/image2.png'),
  },
  {
    // title: "Lorem Ipsum",
    // body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    image: require('../../Assets/image3.png'),
  },
  {
    // title: "Lorem Ipsum",
    // body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    image: require('../../Assets/image3.png'),
  },
  {
    // title: "In turpis",
    // body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    image: require('../../Assets/image2.png'),
  },
  {

    image: require('../../Assets/image1.png'),
  },
];

const Wishlist = ({ data,navigation }) => {
  const [toggleButtonDay, setToggleButtonDay] = useState(false)


  const Getdata = ({ item, index }) => {



    return (<>

      <View style={{ padding: 2 }}>
        <View style={styles.maincard}>
          <TouchableOpacity onPress={()=>navigation.navigate('DetailSearch')} style={styles.Imagecontainer}>
            <View style={styles.mainpr}>
            <View style={styles.per}>
           <Text style={styles.txtper}>-40%</Text>
            </View>
            <View>
              <Image style={styles.heartim} source={require('../../Assets/heart.png')} />
            </View>
            </View>
            <ImageBackground source={item.image} style={styles.image} />
          </TouchableOpacity>
          <View style={{ marginLeft: hp('2%') }}>
            <Text style={styles.textColor}>BRADHY</Text>
            <Text style={styles.txtclr}>Leggings Mocha</Text>
            <Text style={styles.txtdlr}>$49.70</Text>
            <View style={styles.maintx}>
              <Text style={styles.txtclr}>Centro</Text>
              <Text style={styles.txtclr1}>7101.4km</Text>
            </View>
          </View>

        </View>
      </View>

    </>)
  };

  return (
    <>
    
        <StatusBar backgroundColor={'#000'} />
        <Topbar Textheading={'Lista de deseos'} navigation={navigation} />
        <ScrollView>
        <View style={styles.MainFlx}>
          <View>
            <Inputsearch />
          </View>
          <View style={styles.mainntx}>
            <View>
              <Text style={styles.txtmo}>Monstrar filtros</Text>
              <Text style={styles.txt0}>0 filtros aplicados</Text>
            </View>
            <View style={styles.togglmain}>
              <ToggleSwitch

                isOn={toggleButtonDay}
                onColor={LightYellow}
                offColor="#4d4d4d"
                // label="Day Before"
                labelStyle={{ color: "white", fontWeight: "900" }}
                size="large"
                onToggle={isOn => { setToggleButtonDay(isOn), console.log("changed to : ", isOn) }}
              />
            </View>
          </View>
          <View style={styles.hrline} />

          <Text style={styles.txttoda}>Todas las prendas</Text>


          {/* <FlatList> */}
          {/* <Cards data={data1} /> */}

          <FlatList
            showsHorizontalScrollIndicator={false}
            data={data1}
            numColumns={2}
            // keyExtractor={host_sublist => host_sublist.id}
            renderItem={({ item, index }) =>
              (<Getdata item={item} index={index}></Getdata>)} />



        </View>
      </ScrollView>
    </>
  )
}

export default Wishlist

const styles = StyleSheet.create({
  MainFlx: {
    flex: 1,
    backgroundColor: '#333333',
    padding: 10
  },
  txtmo: {
    color: White,
    marginTop: hp('2%'),
    fontSize: hp('2.2%'),
  },
  txt0: {
    color: '#737373',
    fontSize: hp('2.2%'),
  },
  mainntx: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  togglmain: {
    marginTop: hp('2%'),
  },
  hrline: {
    height: hp('0.05%'),
    width: wp('96%'),
    backgroundColor: '#fff',
    marginTop: hp('3%'),

  },
  txttoda: {
    color: White,
    fontSize: hp('2.2%'),
    marginTop: hp('3%'),
  },
  mainimg: {
    flexDirection: 'row',

  },

  imgg1: {
    height: 180,
    width: 182,
    margin: 2,
  },

  mani: {

    backgroundColor: 'black',
    height: 286,

  },

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
  mainpr:{
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:hp('-10.2%'),
  },
  txtclr1:{
    color: White,
    fontWeight: '500',
    fontSize: 10,
    marginRight:hp('2%'),
  },
})


