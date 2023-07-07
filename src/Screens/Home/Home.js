// import { StyleSheet, Text, View, ScrollView, Image, useWindowDimensions, StatusBar,ImageBackground } from 'react-native'
// import React from 'react'
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { MainBlack } from '../../Components/ColorConst/ColorConst';
// import { LightYellow } from '../../Components/ColorConst/ColorConst';
// import { White } from '../../Components/ColorConst/ColorConst';
// import { Black } from '../../Components/ColorConst/ColorConst';
// import Customcarousel from '../../Components/Customcarousel';
// import Topbar from '../../Components/Topbar';


// const data = [
//   {

//     image: require('../../Assets/image1.png'),
//   },
//   {
//     // title: "In turpis",
//     // body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
//     image: require('../../Assets/image2.png'),
//   },
//   {
//     // title: "Lorem Ipsum",
//     // body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
//     image: require('../../Assets/image3.png'),
//   },
// ];


// const Home = ({ navigation }) => {

//   const isCarousel = React.useRef(null)
//   return (
//     <>

//       <StatusBar backgroundColor={'#000'} />
//       <View style={styles.MainFlex}>
//         <Topbar Textheading={'Inicio'} navigation={navigation} />
//         <ScrollView>
//           <View style={styles.main1}>
//             <View>
//               <Text style={styles.txt}>REBAJAS</Text>
//             </View>
//             <View>
//               <Image style={styles.jack} source={require('../../Assets/jacket.png')} />
//             </View>
//           </View>
//           <View style={styles.txtMain2}>
//             <View>
//               <Text style={styles.txtm}>
//                 Marcas Destacadas
//               </Text>
//             </View>
//             <View>
//               <Text style={styles.txts}>
//                 See All
//               </Text>
//             </View>
//           </View>

//           <ScrollView horizontal>
//             <View style={styles.Mainb}>
//               <View style={styles.txmanb}>
//                 <ImageBackground source={require('../../Assets/image2.png')} style={styles.backImg}>
//                   <View style={styles.discountMain}>
//                     <Text style={[styles.txtb,{fontSize:hp('1.6%'),color:'#000'}]}>-68%</Text>
//                   </View>
//                 <Text style={styles.txtb}>220</Text>
//                 </ImageBackground>
//               </View>
//               <View style={styles.txmanb}>
//                 <ImageBackground source={require('../../Assets/image2.png')} style={styles.backImg}>
//                   <View style={styles.discountMain}>
//                     <Text style={[styles.txtb,{fontSize:hp('1.6%'),color:'#000'}]}>-68%</Text>
//                   </View>
//                 <Text style={styles.txtb}>220</Text>
//                 </ImageBackground>
//               </View>
//               <View style={styles.txmanb}>
//                 <ImageBackground source={require('../../Assets/image2.png')} style={styles.backImg}>
//                   <View style={styles.discountMain}>
//                     <Text style={[styles.txtb,{fontSize:hp('1.6%'),color:'#000'}]}>-68%</Text>
//                   </View>
//                 <Text style={styles.txtb}>220</Text>
//                 </ImageBackground>
//               </View>
//               <View style={styles.txmanb}>
//                 <ImageBackground source={require('../../Assets/image2.png')} style={styles.backImg}>
//                   <View style={styles.discountMain}>
//                     <Text style={[styles.txtb,{fontSize:hp('1.6%'),color:'#000'}]}>-68%</Text>
//                   </View>
//                 <Text style={styles.txtb}>220</Text>
//                 </ImageBackground>
//               </View>
//             </View>
//           </ScrollView>

//           <View style={styles.txtMain2}>
//             <View>
//               <Text style={styles.txtm}>
//                 Tiendas destacadas
//               </Text>
//             </View>
//             <View>
//               <Text style={styles.txts}>
//                 See All
//               </Text>
//             </View>
//           </View>

//           <ScrollView horizontal>
//             <View style={styles.maina}>
//               <View style={styles.txman}>
//                 <Text style={styles.txta}>AMLUL</Text>
//               </View>
//               <View style={styles.txman}>
//                 <Text style={styles.txta}>APIA</Text>
//               </View>
//               <View style={styles.txman}>
//                 <Text style={styles.txta}>BLAWSTONE</Text>
//               </View>
//               <View style={styles.txman}>
//                 <Text style={styles.txta}>APIA</Text>
//               </View>
//             </View>
//           </ScrollView>

//           <View style={styles.txtmnn}>
//             <View style={styles.txttm}>
//               <Image source={require('../../Assets/view.png')} />
//               <Text style={styles.txtve}>Ver Todo</Text>
//             </View>
//             <View style={styles.txttm1}>
//               <Image source={require('../../Assets/energy.png')} />
//               <Text style={styles.txtti}>Tinder Moda</Text>
//             </View>
//           </View>

//           <Text style={styles.tx2}>
//             Articulos cerca de ti
//           </Text>
//           <Text style={styles.tx}>
//             Ropa
//           </Text>
//           <View>
//             <Customcarousel data={data} />
//           </View>

//           <View style={styles.card2}>
//             <Text style={styles.tx}>
//               Calzado
//             </Text>
//             <Customcarousel data={data} />
//           </View>

//           <View style={styles.card2}>
//             <Text style={styles.tx}>
//               Accesories
//             </Text>
//             <Customcarousel data={data} />
//           </View>
//         </ScrollView>
//       </View>
//     </>
//   )
// }

// export default Home

// const styles = StyleSheet.create({
//   MainFlex: {
//     flex: 1,
//     backgroundColor: MainBlack,
//     padding: 10
//   },

//   main1: {
//     backgroundColor: LightYellow,
//     height: hp('18%'),
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 18,
//     marginTop:hp('1%')
//   },
//   txt: {
//     fontSize: hp('3%'),
//     fontWeight: '500',
//     color: Black,

//   },
//   jack: {
//     height: hp('18%'),
//     width: wp('18%'),
//   },
//   txtMain2: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   discountMain:{
//     height: hp('3%'),
//     width: wp('14%'),
//     borderRadius:18,
//     alignItems:'center',
//     justifyContent:'center',
//     backgroundColor:LightYellow,
//     marginTop:hp('1.4%'),
//     marginLeft:wp('1.9%'),
//     // margin:10
//   },
//   txtm: {
//     color: White,
//     fontSize: hp('2.1%'),
//     marginVertical: wp('1.4%'),
//   },
//   txts: {
//     color: LightYellow,
//     fontSize: hp('2.1%'),
//     marginVertical: wp('1.4%'),
//   },
//   tx: {
//     color: White,
//     fontSize: hp('2.1%'),
//   },
//   card2: {
//     marginTop: hp('5%'),
//     padding: 2,
//   },
//   tx2: {
//     color: White,
//     fontSize: hp('2.7%'),
//     marginBottom: wp('3%'),
//   },
//   txta: {
//     color: LightYellow,
//     fontSize: hp('1.6%'),
//     marginVertical: wp('1.4%'),
//     marginLeft: hp('2%'),
//   },
//   maina: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   txman: {
//     backgroundColor: '#221D28',
//     height: hp('4%'),
//     width: wp('40%'),
//     borderRadius: 5,
//     margin: 5,
//   },
//   backImg:{
//     height: hp('11.5%'),
//     width: wp('32%'),
//     borderRadius: 5,
//   },
//   txtve: {
//     color: LightYellow,
//   },
//   txtti: {
//     color: '#ff531a',
//   },
//   txtmnn: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     marginTop: hp('4%'),
//   },
//   txttm: {
//     alignItems: 'center',
//     flexDirection: 'row',
//     borderWidth: 0.5,
//     borderColor: LightYellow,
//     height: hp('5%'),
//     width: wp('40%'),
//     borderRadius: 7

//   },
//   txttm1: {

//     alignItems: 'center',
//     flexDirection: 'row',
//     borderWidth: 0.5,
//     borderColor: '#ff531a',
//     height: hp('5%'),
//     width: wp('40%'),
//     borderRadius: 7
//   },
//   Mainb: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   txmanb: {
//     backgroundColor: '#999999',
//     height: hp('11.5%'),
//     width: wp('32%'),
//     borderRadius: 5,
//     margin: 5,
//   },
//   txtb: {
//     color: White,
//     fontSize: hp('2.2%'),
//     alignSelf: 'center',
//     fontWeight:'600'
//   },
// })







import { StyleSheet, Text, View, Image, StatusBar, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MainBlack } from '../../Components/ColorConst/ColorConst';
import { LightYellow } from '../../Components/ColorConst/ColorConst';
import { White } from '../../Components/ColorConst/ColorConst';
import { Black } from '../../Components/ColorConst/ColorConst';
import Customcarousel from '../../Components/Customcarousel';
import Topbar from '../../Components/Topbar';
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
  return (
    <>
      <StatusBar backgroundColor={'#000'} />
      <View style={styles.MainFlex}>
        <Topbar Textheading={'Inicio'} />
        <ScrollView>
          <View style={styles.main1}>
            <View>
              <Text style={styles.txt}>REBAJAS</Text>
            </View>
            <View>
              <Image style={styles.jack} source={require('../../Assets/jacket.png')} />
            </View>
          </View>
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
         
          <ScrollView horizontal>
            <View style={styles.Mainb}>
              <TouchableOpacity style={styles.txmanb} onPress={() => navigation.navigate('BrandDetail')}>
                <ImageBackground source={require('../../Assets/image2.png')} style={styles.backImg}>
                  <View style={styles.discountMain}>
                    <Text style={[styles.txtb,{fontSize:hp('1.6%'),color:'#000'}]}>-68%</Text>
                  </View>
                <Text style={styles.txtb}>220</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.txmanb} onPress={() => navigation.navigate('BrandDetail')}>
                <ImageBackground source={require('../../Assets/image2.png')} style={styles.backImg}>
                  <View style={styles.discountMain}>
                    <Text style={[styles.txtb,{fontSize:hp('1.6%'),color:'#000'}]}>-68%</Text>
                  </View>
                <Text style={styles.txtb}>220</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.txmanb} onPress={() => navigation.navigate('BrandDetail')}>
                <ImageBackground source={require('../../Assets/image2.png')} style={styles.backImg}>
                  <View style={styles.discountMain}>
                    <Text style={[styles.txtb,{fontSize:hp('1.6%'),color:'#000'}]}>-68%</Text>
                  </View>
                <Text style={styles.txtb}>220</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.txmanb} onPress={() => navigation.navigate('BrandDetail')}>
                <ImageBackground source={require('../../Assets/image2.png')} style={styles.backImg}>
                  <View style={styles.discountMain}>
                    <Text style={[styles.txtb,{fontSize:hp('1.6%'),color:'#000'}]}>-68%</Text>
                  </View>
                <Text style={styles.txtb}>220</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </ScrollView>

         
          <View style={styles.txtMain2}>
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
          </ScrollView>
          <View style={styles.txtmnn}>
            <View style={styles.txttm}>
              <Image style={styles.imm} source={require('../../Assets/view.png')} />
              <Text style={styles.txtve}>Ver Todo</Text>
            </View>
            <View style={styles.txttm1}>
              <Image style={styles.imm} source={require('../../Assets/energy.png')} />
              <Text style={styles.txtti}>Tinder Moda</Text>
            </View>
          </View>
          <Text style={styles.tx2}>
            Articulos cerca de ti
          </Text>
          <Text style={styles.tx}>
            Ropa
          </Text>
          <View>
            <Customcarousel data={data} navigation={navigation} />
          </View>
          <View style={styles.card2}>
            <Text style={styles.tx}>
              Calzado
            </Text>
            <Customcarousel data={data} navigation={navigation} />
          </View>
          <View style={styles.card2}>
            <Text style={styles.tx}>
              Accesories
            </Text>
            <Customcarousel data={data} navigation={navigation} />
          </View>
        </ScrollView>
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
    marginVertical: wp('1.4%'),
  },
  txts: {
    color: LightYellow,
    fontSize: hp('2.1%'),
    marginVertical: wp('1.8%'),
  },
  tx: {
    color: White,
    fontSize: hp('2.1%'),
  },
  card2: {
    marginTop: hp('5%'),
    padding: 2,
  },
  tx2: {
    color: White,
    fontSize: hp('2.7%'),
    marginBottom: wp('3%'),
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
    marginTop: hp('4%'),
  },
  txttm: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: LightYellow,
    height: hp('5%'),
    width: wp('40%'),
    borderRadius: 7
  },
  txttm1: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#FF531A',
    height: hp('5%'),
    width: wp('40%'),
    borderRadius: 7
  },
  Mainb: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
     backImg:{
     height: hp('11.5%'),
    width: wp('32%'),
    borderRadius: 5,
  },
   txmanb: {
    backgroundColor: '#999999',
    height: hp('11.5%'),
    width: wp('32%'),
    borderRadius: 5,
    margin: 5,
  },
    discountMain:{
    height: hp('3%'),
    width: wp('14%'),
    borderRadius:18,
     alignItems:'center',
    justifyContent:'center',
     backgroundColor:LightYellow,
     marginTop:hp('1.4%'),
    marginLeft:wp('1.9%'),
    //  margin:10
   },
  txtb: {
       color: White,
    fontSize: hp('2.2%'),
    alignSelf: 'center',
   fontWeight:'600'
  },
  imm: {
    marginLeft: hp('2.5%'),
    marginRight: hp('1.5%'),
  },
})