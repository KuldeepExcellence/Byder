import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useRef, createRef } from 'react'
import { LightYellow, MainBlack, White } from '../../Components/ColorConst/ColorConst'
import Topbar from '../../Components/Topbar'
import Inputsearch from '../../Components/Inputsearch'
import ToggleSwitch from 'toggle-switch-react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Cards from '../../Components/Cards'
import { resizeMode } from 'deprecated-react-native-prop-types/DeprecatedImagePropType'
import { ScrollView } from 'react-native-gesture-handler'
import DetailSearch from '../../DetailSearch/DetailSearch'
import BottomActionSheet from '../../Components/BottomActionSheet'
import CustomBrandcategory from '../../Components/CustomBrandcategory'
import CustombrandSubCat from '../../Components/CustombrandSubCat'
const data1 = [
  {

    image: require('../../Assets/image1.png'),
  },
  {
    // title: "In turpis",
    // body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    image: require('../../Assets/image3.png'),
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


const Wishlist = ({ data, navigation }) => {
  const [toggleButtonDay, setToggleButtonDay] = useState(false)


  const actionSheetBrand = createRef()
  const actionSheetCategory = createRef()
  const actionSheetSubCategory = createRef()
  const actionSheetSize = createRef()
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const Getdata = ({ item, index }) => {



    return (<>

      <View style={{ padding: 2 }}>
        <View style={styles.maincard}>
          <View style={styles.Imagecontainer}>
            <View style={styles.mainpr}>
              <View style={styles.per}>
                <Text style={styles.txtper}>-40%</Text>
              </View>
              <View>
                <Image style={styles.heartim} source={require('../../Assets/heart.png')} />
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
    <>

      <StatusBar backgroundColor={'#000'} />
      {/* <Topbar Textheading={'Buscar'} navigation={navigation} /> */}
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
          {toggleButtonDay ?

          <View>


            <View style={styles.topViewSolo}>


              <Image source={require('../../Assets/price-tag.png')} style={styles.ListImg} />
              <Text style={styles.txtList}>Solo articulos con descuento </Text>
            </View>

            <View style={styles.mainnn}>
              <View style={styles.ll}>
                <Image style={styles.mi} source={require('../../Assets/minus.png')} />
              </View>
              <View style={styles.hom}>
                <Text style={styles.homtx}>
                  HOMBRE
                </Text>
              </View>
              <View style={styles.muj}>
                <Text style={styles.mujtx}>
                  MUJER
                </Text>
              </View>
            </View>

            <Text style={styles.txtHead}>Elege una marca</Text>

            <TouchableOpacity onPress={() => actionSheetBrand.current?.show()}>
              <View style={styles.ree}>
                <View style={styles.r1}>
                </View>
                <Image style={styles.de} source={require('../../Assets/down.png')} />
              </View>
            </TouchableOpacity>
            <Text style={styles.txtHead}>Elege una o mas categorias</Text>
            <BottomActionSheet ref={actionSheetBrand} title={'Title'}>
              < CustomBrandcategory actionSheetBrand={actionSheetBrand} />
            </BottomActionSheet>

            <TouchableOpacity onPress={() => actionSheetSubCategory.current?.show()}>
              <View style={styles.ree}>
                <View style={styles.r1}>
                </View>
                <Image style={styles.de} source={require('../../Assets/down.png')} />
              </View>
            </TouchableOpacity>
            <BottomActionSheet ref={actionSheetSubCategory} title={'Title'}>
              <CustombrandSubCat actionSheetSubCategory={actionSheetSubCategory} />
            </BottomActionSheet>

            <Text style={styles.txtHead}>Precio maximo</Text>
            <TextInput
              style={styles.input1}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="109.99"
              placeholderTextColor={'#737373'}

            />
          </View>
          :
          null }


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
  input1: {
    backgroundColor: '#333333',
    height: 40,
    // margin: 12,
    borderWidth: 1,
    padding: 5,
    paddingLeft: 14,
    borderRadius: 10,
    borderColor: LightYellow,

  },
  MainFlx: {
    flex: 1,
    backgroundColor: '#15181e',
    padding: 10
  },
  txtmo: {
    color: White,
    marginTop: hp('2%'),
    fontSize: hp('2.2%'),
  },
  txtHead: {
    color: '#707173',
    fontSize: hp('1.9%'),
    marginVertical: hp('1%'),
    fontWeight: '500'
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
  mainpr: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('-10.2%'),
  },
  per: {
    backgroundColor: LightYellow,
    width: wp('8.8%'),
    height: hp('2.5%'),
    borderRadius: 7,
  },
  txtper: {
    fontSize: 12,
  },
  heartim: {
    height: hp('3%'),
    width: wp('5.7%'),
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
  txtclr1: {
    color: White,
    fontWeight: '500',
    fontSize: hp('1.8%'),
    marginRight: hp('2%'),
  },
  topViewSolo: {
    width: wp('94%'),
    height: hp('5.5%'),
    backgroundColor: '#2d332d',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtList: {
    fontSize: hp('2.1%'),
    color: '#d2f39f',
    fontWeight: "700",
    marginLeft: hp('2%'),
  },
  ListImg: {
    height: hp('2.5%'),
    width: wp('5%'),
    tintColor: LightYellow
  },
  mainnn: {
    flexDirection: 'row',
    marginTop: hp('2.7%'),
    marginBottom: hp('2.7%'),
    backgroundColor: '#333333',
    width: wp('94%'),
    borderRadius: 7,
  },
  ll: {
    backgroundColor: '#666666',
    height: hp('5%'),
    width: wp('12%'),
    // marginLeft: hp('2%'),
    borderRadius: 10,
  },
  mi: {
    alignSelf: 'center',
    marginTop: hp('1.5%'),
  },
  hom: {
    backgroundColor: '#333333',
    height: hp('4%'),
    width: wp('35%'),
    marginLeft: hp('0.5%'),
    // borderRadius: 20,
  },
  homtx: {
    color: White,
    fontWeight: '600',
    marginTop: hp('1.1%'),
    alignSelf: 'center',
  },
  muj: {
    backgroundColor: '#333333',
    height: hp('4%'),
    width: wp('35%'),
    marginLeft: hp('0.5%'),
    // borderRadius: 20,
  },
  mujtx: {
    color: White,
    fontWeight: '600',
    marginTop: hp('1.1%'),
    alignSelf: 'center',
  },
  ree: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#333333',
    padding: 12,
    height: hp('6%'),
    width: wp('95%'),
    borderRadius: 10,
    alignSelf: 'center',
  },
  r1: {
    backgroundColor: '#595959',
    height: hp('4.5%'),
    width: wp('9%'),
    borderRadius: 30,
    alignSelf: 'center',
  },
  de: {
    alignSelf: 'center',
    marginTop: hp('0.3%'),
    width: wp('5.5%'),
    marginLeft: hp('10.5%'),
    height: hp('3%'),
  },
})


