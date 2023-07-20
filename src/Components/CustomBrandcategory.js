import { StyleSheet, Text, View ,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const CustomBrandcategory = ({navigation,actionSheetBrand}) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const [selectedBrands, setSelectedBrands] = React.useState([]);
  const handleBrandSelect = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((selectedBrand) => selectedBrand !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };
  return (
    <>
   <View style={styles.topmain}>
      <View style={styles.txttop}>
      <Text style={styles.txt}>
      Eligle una marca
     </Text>
   <TouchableOpacity onPress={()=> actionSheetBrand.current?.hide()}>
   <Text style={styles.txtd}>
      Done
     </Text>
   </TouchableOpacity>
  </View>
  <View style={styles.searcmain}>
          <View style={styles.srchmainim}>
            <View style={styles.serchm}>
              {/* <Image style={styles.srchim} source={require('../Assets/searchwhite.png')} /> */}
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
</View>
<ScrollView>
        <View style={styles.main}>
        <TouchableOpacity
  style={styles.brandmain}
  onPress={() => handleBrandSelect('Nike')}
>
  <View style={styles.nikeimgmain}>
    <Image style={styles.nikeimg} source={require('../Assets/nike.png')} />
  </View>
  <Text style={styles.niketxt}>Nike</Text>
  {selectedBrands.includes('Nike') && (
    <Image style={styles.tickimg} source={require('../Assets/tick.png')} />
  )}
</TouchableOpacity>
        <View style={styles.hrline} />
        <TouchableOpacity
  style={styles.brandmain}
  onPress={() => handleBrandSelect('Nike')}
>
  <View style={styles.nikeimgmain}>
    <Image style={styles.nikeimg} source={require('../Assets/nike.png')} />
  </View>
  <Text style={styles.niketxt}>Nike</Text>
  {selectedBrands.includes('Nike') && (
    <Image style={styles.tickimg} source={require('../Assets/tick.png')} />
  )}
</TouchableOpacity>
        <View style={styles.hrline} />
        <TouchableOpacity
  style={styles.brandmain}
  onPress={() => handleBrandSelect('Nike')}
>
  <View style={styles.nikeimgmain}>
    <Image style={styles.nikeimg} source={require('../Assets/nike.png')} />
  </View>
  <Text style={styles.niketxt}>Nike</Text>
  {selectedBrands.includes('Nike') && (
    <Image style={styles.tickimg} source={require('../Assets/tick.png')} />
  )}
</TouchableOpacity>
        <View style={styles.hrline} />
    </View>
    </ScrollView>
    </>
  )
}
export default CustomBrandcategory
const styles = StyleSheet.create({
  topmain:{
    backgroundColor:"black",
    height:hp('12%'),
  },
  main:{
    // flex:1,
    backgroundColor:"#333333",
    height:hp('90%'),
  },
  txttop:{
flexDirection:'row',
// justifyContent:'center',
// alignItems:"center",
  },
  txt:{
    color:'white',
    marginLeft:hp("20%"),
    marginTop:hp('1%'),
  },
  txtd:{
    color:'#DAFDA5',
    marginTop:hp('1%'),
marginLeft:hp("13%"),
  },
  searcmain: {
    backgroundColor: "#333333",
    height: hp('5.5%'),
    borderRadius:10,
    marginTop: hp('1%'),
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
  srchim: {
    height: hp('2.5%'),
    width: wp('5.2%'),
    marginTop: hp('1%'),
    marginLeft: hp('0.8%'),
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
  brandmain:{
    flexDirection:'row',
    padding:10,
  },
  nikeimgmain:{
    backgroundColor:'white',
    height:hp('4%'),
    width:wp('7%'),
    borderRadius:50,
    marginTop: hp('1%'),
  },
  nikeimg:{
    height:hp('2.5%'),
    width:wp('6%'),
    marginTop: hp('1%'),
    marginLeft: hp('0.4%'),
  },
  niketxt:{
    color:'white',
    fontSize:hp('2.6%'),
    marginTop: hp('1.2%'),
    marginLeft: hp('2%'),
  },
  hrline: {
    height: hp('0.05%'),
    width: wp('96%'),
    backgroundColor: '#fff',
    marginTop: hp('0.6%'),
alignSelf:'center'
  },
  tickimg:{
    height:hp('2.5%'),
    width:wp('6%'),
    marginTop: hp('1.6%'),
    marginLeft: hp('34%'),
  },
})