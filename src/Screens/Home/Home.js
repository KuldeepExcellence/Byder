

import { StyleSheet, Text, View, Image, StatusBar, ScrollView, FlatList,ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MainBlack } from '../../Components/ColorConst/ColorConst';
import { LightYellow } from '../../Components/ColorConst/ColorConst';
import { White } from '../../Components/ColorConst/ColorConst';
import { Black } from '../../Components/ColorConst/ColorConst';
import Customcarousel from '../../Components/Customcarousel';
import Topbar from '../../Components/Topbar';
import { Baseurl } from '../../Components/Baseurl';
import Loader from '../../Components/Loader';

const data = [
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
];


const Home = ({ navigation }) => {

  const isCarousel = React.useRef(null)

  const [dataBrand, setDataBrand] = useState([])
  const [ropaData, setRopaData] = useState([])
  const [calzadoData, setCalzadoData] = useState([])
  const [accessoryData, setAccessoryData] = useState([])
  
  const [loaderVisible, setLoaderVisible] = useState(false);
  // console.log(ropaData, 'dataBrand')


  const promotions = () => {
    setLoaderVisible(true)
    fetch(Baseurl + '/api/brand/', {
      headers: {
        "Accept": "application/json",
        "Content-Type": "multipart/form-data",
      },
    }).then((response) => response.json())
      .then((json) => {
        setLoaderVisible(false)
        setDataBrand(json)
      })
      .catch((error) => {
        setLoaderVisible(false)
        console.error(error)
      })
  }
  const RopaData = () => {
    setLoaderVisible(true)
    fetch(Baseurl + '/api/product/category/ROPA/', {
      headers: {
        "Accept": "application/json",
        "Content-Type": "multipart/form-data",
      },
    }).then((response) => response.json())
      .then((json) => {
        setLoaderVisible(false)
        setRopaData(json)
      })
      .catch((error) => {
        setLoaderVisible(false)
        console.error(error)
      })
  }
  const CalzadoData = () => {
    setLoaderVisible(true)
    fetch(Baseurl + '/api/product/category/CALZADO/', {
      headers: {
        "Accept": "application/json",
        "Content-Type": "multipart/form-data",
      },
    }).then((response) => response.json())
      .then((json) => {
        setLoaderVisible(false)
        setCalzadoData(json)
      })
      .catch((error) => {
        setLoaderVisible(false)
        console.error(error)
      })
  }
  const AccessoryData = () => {
    setLoaderVisible(true)
    fetch(Baseurl + '/api/product/category/ACCESORIOS/', {
      headers: {
        "Accept": "application/json",
        "Content-Type": "multipart/form-data",
      },
    }).then((response) => response.json())
      .then((json) => {
        setLoaderVisible(false)
        setAccessoryData(json)
      })
      .catch((error) => {
        setLoaderVisible(false)
        console.error(error)
      })
  }

  useEffect(() => {
    
    promotions();
    RopaData();
    CalzadoData();
    AccessoryData();

  }, [])


  const Brand = ({ item, index }) => {
    // console.log(item.image_link,'item.image_link')

    return (
      <>
        <View style={styles.Mainb}>
          <TouchableOpacity style={styles.txmanb} onPress={() => navigation.navigate('BrandDetail',{brandId:item.brand})}>
            <ImageBackground source={{uri:item.image_link}} style={styles.backImg}>
            {item.max_discount == null ? null:
              <View style={styles.discountMain}> 
                <Text style={[styles.txtb, { fontSize: hp('1.6%'), color: '#000' }]}>{item.max_discount}%</Text>
              </View>
            }
              <Text style={styles.txtb}>{item.brand}</Text>
            </ImageBackground>
          </TouchableOpacity>
          </View>
       
      </>
    )
  }

  return (
    <>
      <StatusBar backgroundColor={'#000'} />
      <View style={styles.MainFlex}>
        {/* <Topbar Textheading={'Inicio'} navigation={navigation} /> */}
        <ScrollView>
        <TouchableOpacity style={styles.main1} onPress={() => navigation.navigate('DiscountScreen')}>
          
            <View>
              <Text style={styles.txt}>REBAJAS</Text>
            </View>
            <View>
              <Image style={styles.jack} source={require('../../Assets/jacket.png')} />
            </View>
          </TouchableOpacity>
          <View style={styles.txtMain2}>
            <View>
              <Text style={styles.txtm}>
                Marcas Destacadas
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('BrandSeeAll')}>
                <Text style={styles.txts}>
                  See All
                </Text>
              </TouchableOpacity>
            </View>
          </View>

        

          <FlatList
            horizontal
            data={dataBrand.slice(0, 10)}
            renderItem={({ item, index }) =>
              <Brand item={item} index={index}> </Brand>} />


          {/* <View style={styles.txtMain2}>
            <View>
              <Text style={styles.txtm}>
                Tiendas destacadas
              </Text>
            </View>
            <View>
              <Text style={styles.txts}>
                See All
              </Text>
            </View>
          </View>

          <ScrollView horizontal>
            <View style={styles.maina}>
              <View style={styles.txman}>
                <Text style={styles.txta}>AMLUL</Text>
              </View>
              <View style={styles.txman}>
                <Text style={styles.txta}>APIA</Text>
              </View>
              <View style={styles.txman}>
                <Text style={styles.txta}>BLAWSTONE</Text>
              </View>
              <View style={styles.txman}>
                <Text style={styles.txta}>APIA</Text>
              </View>
            </View>
          </ScrollView> */}

          <View style={styles.txtmnn}>
            <TouchableOpacity style={styles.txttm} onPress={() => navigation.navigate('Search')}>
              <Image style={styles.imm} source={require('../../Assets/view.png')} />
              <Text style={styles.txtve}>Ver Todo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.txttm1} onPress={() => navigation.navigate('Waterdrop')}>
              <Image style={styles.imm} source={require('../../Assets/energy.png')} />
              <Text style={styles.txtti}>Tinder Moda</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.tx2}>
            Articulos cerca de ti
          </Text>
          <Text style={styles.tx}>
            Ropa
          </Text>
          <View>
            <Customcarousel
              data={ropaData.slice(0,10)}
              // data={data.slice(0,30)} 
              navigation={navigation} />
          </View>
          <View style={styles.card2}>
            <Text style={styles.tx}>
              Calzado
            </Text>
            <Customcarousel data={calzadoData.slice(0,10)} navigation={navigation} />
          </View>
          <View style={styles.card2}>
            <Text style={styles.tx}>
              Accesories
            </Text>
            <Customcarousel data={accessoryData.slice(0,10)} navigation={navigation} />
          </View>
        </ScrollView>
        <Loader loaderVisible={loaderVisible} setLoaderVisible={setLoaderVisible} />
      </View>
    </>
  )
}
export default Home
const styles = StyleSheet.create({
  MainFlex: {
    flex: 1,
    backgroundColor: MainBlack,
    padding: 10
  },
  main1: {
    backgroundColor: LightYellow,
    height: hp('18%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
  },
  txt: {
    fontSize: hp('3%'),
    fontWeight: '500',
    color: Black,
  },
  jack: {
    height: hp('18%'),
    width: wp('18%'),
  },
  txtMain2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtm: {
    color: White,
    fontSize: hp('2.1%'),
    marginVertical: wp('0.5%'),
    fontWeight: '600'
  },
  txts: {
    color: LightYellow,
    fontSize: hp('2%'),
    marginVertical: wp('1.8%'),
  },
  tx: {
    color: White,
    fontSize: hp('2.1%'),
    fontWeight: '600',
    marginLeft: wp('2%'),
  },
  card2: {
    marginTop: hp('0.5%'),
    padding: 2,
  },
  tx2: {
    color: White,
    fontSize: hp('2.6%'),
    marginTop: hp('1.2%'),
    marginBottom: wp('3%'),
    fontWeight: '700',
    marginLeft: wp('2%'),
  },
  txta: {
    color: LightYellow,
    fontSize: hp('1.6%'),
    marginVertical: wp('1.4%'),
    marginLeft: hp('2%'),
  },
  maina: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txman: {
    backgroundColor: '#221D28',
    height: hp('4%'),
    width: wp('40%'),
    borderRadius: 5,
    margin: 5,
  },
  txtve: {
    color: LightYellow,
  },
  txtti: {
    color: '#FF531A',
  },
  txtmnn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: hp('2.8%'),
  },
  txttm: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: LightYellow,
    height: hp('5%'),
    width: wp('42.5%'),
    borderRadius: 7
  },
  txttm1: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#FF531A',
    height: hp('5%'),
    width: wp('42.5%'),
    borderRadius: 7
  },
  Mainb: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  backImg: {
    height: hp('11.5%'),
    width: wp('32%'),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txmanb: {
    backgroundColor: '#999999',
    height: hp('11.5%'),
    width: wp('32%'),
    borderRadius: 5,
    margin: 5,
  },
  discountMain: {
    height: hp('3%'),
    width: wp('14%'),
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: LightYellow,
    marginTop: hp('-1.6%'),
    alignSelf:'flex-start',
    marginLeft: wp('1.9%'),
    //  margin:10
  },
  txtb: {
    color: White,
    fontSize: hp('2%'),
    alignSelf: 'center',
    fontWeight: '600',
    textAlign:"center"
  },
  imm: {
    marginLeft: hp('2.5%'),
    marginRight: hp('1.5%'),
  },
})