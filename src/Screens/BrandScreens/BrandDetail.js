import { StyleSheet, Text, View, StatusBar, ScrollView, Image,TouchableOpacity, TextInput ,ImageBackground,FlatList} from 'react-native'
import React from 'react'
import Topbarback from '../../Components/Topbarback';
import { LightYellow, MainBlack, White } from '../../Components/ColorConst/ColorConst';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
const BrandDetail = ({ navigation }) => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    const Getdata = ({ item, index }) => {
        return (<>
          <View style={{ padding: 6}}>
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
              <TouchableOpacity onPress={()=>navigation.navigate('DetailSearch')}>
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
            <Topbarback Textheading={'220V'} navigation={navigation} />
           
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
                <Text style={styles.headingtxt}>ACCESORIOS</Text>
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
export default BrandDetail
const styles = StyleSheet.create({
    searcmain: {
        backgroundColor: MainBlack,
        height: hp('7%'),
    },
    srchmainim: {
        flexDirection: 'row',
    },
    serchm: {
        height: 36,
        backgroundColor: '#373739',
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
        marginLeft: hp('-2.4%'),
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: hp('0.6%'),
        border: 'none',
    },
    main: {
        backgroundColor: '#15181e',
        height: hp('110%'),
        width: wp('100%'),
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
      headingtxt:{
        color: 'white',
        fontWeight: '500',
        fontSize: hp('2.2%'), 
        marginLeft:hp('1.2%'),
         marginVertical:hp('0.4%'),
      },
})