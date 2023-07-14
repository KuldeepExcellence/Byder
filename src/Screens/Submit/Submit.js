import { StyleSheet, Text, View, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Topbarback from '../../Components/Topbarback'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LightYellow, White } from '../../Components/ColorConst/ColorConst';
const Submit = ({ navigation }) => {
    return (
        <>
            <StatusBar backgroundColor={'#000'} />
            <Topbarback navigation={navigation} />
            <ScrollView>
                <View style={styles.main2}>
                    <View style={styles.txtman}>
                        <Text style={styles.txt5}>5% de reembolso{'\n'}
                            al subir el ticket de compra de la tienda{'\n'}
                            Tu dinero aparecera en:
                            {'\n'}{'\n'}Mi Perfil Byder Wallet</Text>
                    </View>
                    <View style={styles.txtmain1}>
                        <View style={styles.txtbo2}>
                            <Image style={styles.imgs} source={require('../../Assets/share.png')} />
                            <Text style={styles.txtv}>
                                Link al producto
                            </Text>
                        </View>
                        <TouchableOpacity onPress={()=>navigation.navigate('SubirTicket')}>
                            <View style={styles.txtbo}>
                                <Image style={styles.img} source={require('../../Assets/cloud.png')} />
                                <Text style={styles.txtv}>
                                    Subir ticket
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.hrline} />
                    <View style={styles.mntx} >
                        <Text style={styles.estx}>Estado del pedido:</Text>
                        <Text style={styles.sutx}>Pedido pendiente</Text>
                    </View>
                    <View style={styles.hrline2} />
                    <View style={styles.mntx} >
                        <Text style={styles.estx}>Salamanca</Text>
                        <Text style={styles.suta7}>A 7,101.9 km de ti</Text>
                    </View>
                    <View style={styles.mainimj}>
                        <Image style={styles.imgj} source={require('../../Assets/image1.png')} />
                    </View>
                    <Text style={styles.bltx}>Black Leather Jacket</Text>
                    <Text style={styles.tx20}>209.00 €</Text>
                </View>
            </ScrollView>
        </>
    )
}
export default Submit
const styles = StyleSheet.create({
    main2: {
        flex: 1,
        backgroundColor: '#221D28',
        padding: 10,
        height: hp('105%'),
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
    txtbo: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: LightYellow,
        height: hp('6%'),
        width: wp('45%'),
        borderRadius: 7,
    },
    img: {
        marginLeft: hp('2.5%'),
        alignSelf: 'center',
        height: hp('2.5%'),
        width: wp('4.5%'),
    },
    txtv: {
        color: LightYellow,
        fontSize: hp('2.4%'),
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: hp('0.1%'),
        marginLeft: hp('1%'),
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
        backgroundColor: '#fff',
        marginTop: hp('3%'),
    },
    mntx: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp('2%'),
    },
    estx: {
        color: White,
        fontSize: hp('2.2%'),
        fontWeight: '600',
    },
    sutx: {
        color: '#B38F00',
        fontSize: hp('2.2%'),
        fontWeight: '600',
    },
    hrline2: {
        height: hp('0.03%'),
        width: wp('96%'),
        backgroundColor: '#fff',
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
        fontSize: hp('2.2%'),
        fontWeight: '600',
        marginTop: hp('1%'),
    },
    tx20: {
        color: '#8C8C8C',
        fontSize: hp('2.1%'),
    },
})