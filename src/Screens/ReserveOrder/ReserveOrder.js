import { StyleSheet, Text, View, StatusBar, ScrollView, ImageBackground } from 'react-native'
import React from 'react';
import Topbarback from '../../Components/Topbarback';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LightYellow, White } from '../../Components/ColorConst/ColorConst';

const ReserveOrder = ({ navigation }) => {
    return (
        <>

            <StatusBar backgroundColor={'#000'} />
            <Topbarback Textheading={'Mis Pedidos'} navigation={navigation} />


            <View style={styles.main2}>
                <Text style={styles.txtop}>Mis Pedidos</Text>
                <Text style={[styles.txtop, { marginTop: hp('2.1%'), fontSize: hp('2.1%') }]}>Ticket en revision</Text>



                <ScrollView>
                    <View style={styles.cardMain}>
                        <TouchableOpacity style={styles.imgmain} onPress={()=>navigation.navigate('MyReserveDetail')}>
                            <ImageBackground source={require('../../Assets/image1.png')} style={styles.backimg}>
                                <View style={styles.discountMain}>
                                    <Text style={styles.txtb}>TICKET EN REVISION</Text>

                                </View>
                                <Text style={styles.txtTitle}>JW ANDERSON MEN POOLSLIDE ANCHOR ...</Text>
                                <Text style={styles.txtPrice}>150$</Text>
                            </ImageBackground>

                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

        </>
    )
}

export default ReserveOrder

const styles = StyleSheet.create({
    main2: {
        flex: 1,
        backgroundColor: '#221D28',
        padding: 10,
        // height: hp('124%'),
    },
    cardMain: {
        justifyContent: "center",
        alignItems: 'center',
    },
    txtop: {
        fontSize: hp('2.2%'),
        color: 'white',
        fontWeight: "700",
    },
    imgmain: {
        height: hp('16.6%'),
        width: wp('92.5%'),
        marginTop: hp('2.2%'),
        borderWidth: 1,
        borderColor: '#737373',
        borderRadius: 10,
        backgroundColor: '#556562eb',
        // padding:8
    },
    backimg: {
        height: hp('16.6%'),
        width: wp('92.5%'),
    },
    discountMain: {
        height: hp('3%'),
        width: wp('34%'),
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: LightYellow,
        marginTop: hp('1.4%'),
        marginLeft: wp('1.9%'),
        // margin:10
    },
    txtb: {
        color: '#000',
        fontSize: hp('1.3%'),
        alignSelf: 'center',
        fontWeight: '500'
    },
    txtTitle: {
        color: '#fff',
        fontSize: hp('2.1%'),
        alignSelf: 'center',
        fontWeight: '500',
        marginTop: hp('1.2%')
    },
    txtPrice: {
        color: '#fff',
        fontSize: hp('2.1%'),
        alignSelf: 'center',
        fontWeight: '500',
        marginTop: hp('0.2%')
    },
})