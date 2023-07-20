import { StyleSheet, Text, View, StatusBar, ScrollView, Image, Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import Topbarback from '../../Components/Topbarback'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LightYellow, White } from '../../Components/ColorConst/ColorConst';
import Swiper from 'react-native-swiper';

const StoreSubmit = ({ navigation }) => {


    const images = [
        require('../../Assets/image1.png'),
        require('../../Assets/image2.png'),
        require('../../Assets/image3.png'),
        require('../../Assets/shoe.png'),
        require('../../Assets/image1.png'),
    ];



    return (
        <>
            <StatusBar backgroundColor={'#000'} />
            <Topbarback navigation={navigation} />
            <ScrollView>
                <View style={styles.main2}>
                    <View style={styles.txtman}>
                        <Text style={styles.txt5}>5% de reembolso</Text>
                        <Text style={[styles.txtdesc, { marginTop: hp('0.3%') }]}>al subir el ticket de compra de la tienda{'\n'}
                            Tu dinero aparecera en:</Text>
                        <Text style={[styles.txtdesc, { marginTop: hp('1.1%') }]}>Mi Perfil Byder Wallet</Text>
                    </View>
                    <TouchableOpacity style={styles.map} onPress={() => navigation.navigate('MapsScreen')}>
                        <Image style={styles.mapimg} source={require('../../Assets/locationgoogle.png')} tintColor='#fa7472' />
                        <Text style={styles.txab}>Abrir en Google Maps</Text>
                    </TouchableOpacity>
                    <View style={styles.txtmain1}>
                        <View style={styles.txtbo}>
                            <Image style={styles.img} source={require('../../Assets/calendar.png')} />
                            <Text style={styles.txtv1}>
                                Reservar en{'\n'}tienda gratis
                            </Text>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('SubirTicket')}>
                            <View style={styles.txtbo}>
                                <Image style={styles.img2} source={require('../../Assets/cloud.png')} />
                                <Text style={styles.txtv2}>
                                    Subir ticket
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.hrline} />
                    <View style={styles.mntx} >
                        <Text style={styles.estx}>Estado del pedido:</Text>
                        <Text style={styles.sutx}>Sin Reservar</Text>
                    </View>
                    <View style={styles.hrline2} />
                    <View style={styles.mntx} >
                        <Text style={styles.estx}>Centro</Text>
                        <Text style={styles.suta7}>A 7,101.9 km de ti</Text>
                    </View>
                    <View style={styles.mainimj}>
                        <Swiper style={styles.wrapper} >
                            {images.map((image, index) => (
                                <View key={index} style={styles.slide}>
                                    <Image source={image} style={styles.image} resizeMode="cover" />
                                </View>
                            ))}
                        </Swiper>
                        {/* <Image style={styles.imgj} source={require('../../Assets/image1.png')} /> */}
                    </View>
                    <View style={styles.bottomView}>
                        <Text style={styles.bltx}>Black Leather Jacket</Text>
                        <Text style={styles.tx20}>209.00 €</Text>
                        <View style={styles.hrline2} />

                        <TouchableOpacity style={styles.addWalletSession} onPress={() => navigation.navigate('Login')}>
                            <Image source={require('../../Assets/delete.png')} style={styles.dollarImg} tintColor='#f77371' />
                            <Text style={[styles.txtName, { marginLeft: hp('1.4%'), fontSize: hp('2.1%'), color: '#f77371' }]}>Eliminar pedido</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
export default StoreSubmit
const styles = StyleSheet.create({
    main2: {
        flex: 1,
        backgroundColor: '#15181e',
        padding: 10,
        // height: hp('105%'),
    },
    txtman: {
        backgroundColor: '#332200',
        height: hp('15%'),
        width: wp('93%'),
        borderWidth: 2,
        borderColor: '#665200',
        borderRadius: 7,
    },
    txt5: {
        color: '#B38F00',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: hp('2%'),
        marginTop: hp('1.5%'),
    },
    txtmain1: {
        marginTop: hp('3%'),
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    txtdesc: {
        color: '#ae8637',
        // paddingLeft: 10,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: hp('1.9%'),
    },
    txtbo: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: LightYellow,
        height: hp('8%'),
        width: wp('45%'),
        borderRadius: 7,
    },
    img: {
        marginLeft: hp('2.5%'),
        alignSelf: 'center',
        height: hp('2.5%'),
        width: wp('4.5%'),
    },
    img2: {
        marginLeft: hp('3%'),
        alignSelf: 'center',
        height: hp('2.5%'),
        width: wp('4.5%'),
    },
    txtv1: {
        color: '#d5f7a2',
        fontSize: hp('2%'),
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: hp('0.1%'),
        marginLeft: hp('3%'),
    },
    txtv2: {
        color: LightYellow,
        fontSize: hp('2%'),
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: hp('0.1%'),
        marginLeft: hp('2%'),
    },
    txtbo2: {
        flexDirection: 'row',
        backgroundColor: '#333333',
        borderRadius: 7,
        height: hp('6%'),
        width: wp('45%'),
    },
    imgs: {
        marginLeft: hp('1%'),
        alignSelf: 'center',
        height: hp('2.5%'),
        width: wp('4.5%'),
    },
    hrline: {
        height: hp('0.03%'),
        width: wp('96%'),
        backgroundColor: '#292c32',
        marginTop: hp('3%'),
    },
    mntx: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp('2%'),
    },
    estx: {
        color: '#e0e1e1',
        fontSize: hp('2.2%'),
        fontWeight: '600',
    },
    sutx: {
        color: '#f8a101',
        fontSize: hp('2.2%'),
        fontWeight: '600',
    },
    hrline2: {
        height: hp('0.03%'),
        width: wp('96%'),
        backgroundColor: '#292c32',
        marginTop: hp('3%'),
    },
    suta7: {
        color: LightYellow,
        fontSize: hp('2.2%'),
        fontWeight: '600',
    },
    mainimj: {
        backgroundColor: White,
        marginTop: hp('2%'),
        height: hp('50%'),
    },
    imgj: {
        height: hp('40%'),
        width: wp('60%'),
        alignSelf: 'center',
        marginTop: hp('4%'),
    },
    bltx: {
        color: White,
        fontSize: hp('3%'),
        fontWeight: '600',
        marginTop: hp('1%'),
    },
    tx20: {
        color: '#8C8C8C',
        fontSize: hp('2.1%'),

    },
    bottomView: {
        marginBottom: hp('8%'),
    },
    map: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#ab5455',
        height: hp('6%'),
        width: wp('93%'),
        borderRadius: 7,
        marginTop: hp('3%'),
    },
    txab: {
        // color:'#FF531A',
        color: '#fa7472',
        fontSize: hp('2.2%'),
        fontWeight: '600',
        alignSelf: 'center',
        marginLeft: hp('2%'),
    },
    mapimg: {
        marginLeft: hp('12%'),
        alignSelf: 'center',
        height: hp('2.5%'),
        width: wp('4.5%'),
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: Dimensions.get('window').width,
        height: '100%',
      },
      txtName: {
        fontSize: hp('2.4%'),
        color: 'white',
        fontWeight: "700",
        fontFamily: 'Avenir',
        textShadowColor: 'black',
      },
      dollarImg: {
        height: hp('2.2%'),
        width: wp('4.4%'),
      },
      addWalletSession: {
        flexDirection: 'row',
        height: hp('5.6%'),
        width: wp('92.5%'),
     
        borderRadius: 10,
        backgroundColor: '#2d332d',  
        marginTop: hp('2.2%'),
        justifyContent: 'center',
        alignItems: 'center',
      },
})