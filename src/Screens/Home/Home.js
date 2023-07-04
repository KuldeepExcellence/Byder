import { StyleSheet, Text, View, Image, StatusBar,ScrollView } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MainBlack } from '../../Components/ColorConst/ColorConst';
import { LightYellow } from '../../Components/ColorConst/ColorConst';
import { White } from '../../Components/ColorConst/ColorConst';
import { Black } from '../../Components/ColorConst/ColorConst';

import Customcarousel from '../../Components/Customcarousel';


const data = [
  {
  
   image:require('../../Assets/image1.jpg'),
  },
  {
    // title: "In turpis",
    // body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    image:require('../../Assets/images2.jpg'),
  },
  {
    // title: "Lorem Ipsum",
    // body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    image:require('../../Assets/image3.png'),
  },
];


const Home = () => {
 
  const isCarousel = React.useRef(null)
  return (
    <>

      <StatusBar backgroundColor={'#000'} />
      <View style={styles.MainFlex}>
        <View style={styles.Topimg}>
        <Image style={styles.navi} source={require('../../Assets/navigation.png')}  tintColor={LightYellow} />
        <Text  style={styles.txtMain}>Inicio</Text>
        </View>
      
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
    <Text style={styles.txts}>
       See All
    </Text>
  </View>
</View>
<Text style={styles.tx2}>
Articulos cerca de ti
</Text>
<Text style={styles.tx}>
 Ropa 
</Text>
<View>
<Customcarousel data={data}/>
</View>

<View style={styles.card2}>
<Text style={styles.tx}>
Calzado
</Text>
<Customcarousel data={data}/>
</View>

<View style={styles.card2}>
<Text style={styles.tx}>
Accesories
</Text>
<Customcarousel data={data}/>
</View>
        </ScrollView>
      </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  MainFlex:{
    flex:1,
    backgroundColor:MainBlack,
    padding:10
  },
  Topimg:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"flex-start",
  
  },
  txtMain:{
    fontSize:hp('2.4%'),
    color:White,
    fontWeight:'700',
    marginLeft:wp("36%")
  },
  navi: {
    width: wp('8%'),
    height: hp('5%'),
  },
  main1:{
    backgroundColor:LightYellow,
    height:hp('18%'),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:18,
  },
  txt:{
    fontSize:hp('3%'),
    fontWeight:'500',
    color:Black,
    
  },
  jack:{
    height:hp('18%'),
    width:wp('18%'),
  },
  txtMain2:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  txtm:{
 color:White,
 fontSize:hp('2.1%'),
 marginVertical:wp('1.4%'),
  },
  txts:{
    color:LightYellow,
    fontSize:hp('2.1%'),
    marginVertical:wp('1.4%'),
  },
  tx:{
    color:White,
    fontSize:hp('2.1%'),
  },
  card2:{
    marginTop:hp('5%'),
    padding:2,
  },
  tx2:{
    color:White,
    fontSize:hp('2.7%'),
  },
})