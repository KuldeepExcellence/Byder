import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { LightYellow } from '../Components/ColorConst/ColorConst'
import { MainBlack } from '../Components/ColorConst/ColorConst'
import { White } from '../Components/ColorConst/ColorConst'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { style } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes'
import Topbarback from '../Components/Topbarback'


const DetailSearch = ({navigation}) => {
    return (
        <>
            <StatusBar backgroundColor={'#000'} />
            <Topbarback Textheading={'ADIMATIC'} navigation={navigation} />
            <ScrollView>
                <View style={styles.main2}>
                    <View style={styles.txtmain1}>
                        <View style={styles.txtbo}>
                            <Image style={styles.img} source={require('../Assets/location.png')} />
                            <Text style={styles.txtv}>
                                Ver en tienda
                            </Text>
                        </View>
                        <View style={styles.txtbo2}>
                            <Image style={styles.imgs} source={require('../Assets/shopping-cart.png')} />
                            <Text style={styles.txtv}>
                                Comprar online
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.txtt}>Tallas disponibles</Text>
                    <View style={styles.txma1}>
                        <Text style={styles.txttt}>42</Text>
                    </View>
                    <Text style={styles.txtadima}>ADIMATIC</Text>
                    <Text style={styles.txtADDI}>ADIDAS</Text>
                    <View style={styles.txt6main}>
                        <View style={styles.txt66mn}>
                            <View>
                                <Text style={styles.txt66}>66.00 €</Text>
                            </View>
                            <Text style={styles.txt11}>1̶1̶0̶.0̶0̶ €</Text>
                        </View>
                        <View>
                            <Text style={styles.txtA7}>A 7,105.1 km de ti</Text>
                        </View>
                    </View>
                    <View style={styles.shoebac}>
                        <Image style={styles.shoeimg} source={require('../Assets/shoe.png')} />
                        <View>
                            <Image style={styles.heimg1} source={require('../Assets/heartwhite.png')} />
                        </View>
                    </View>
                    <View style={styles.hrline} />
                    <View>
                        <Text style={styles.txtprod}>Productos relacionados</Text>
                        <ScrollView horizontal>
                            <View style={styles.maina}>
                                <View style={styles.txman}>
                                    <View style={styles.imgfl}>
                                        <View >
                                            <Image style={styles.img1} source={require('../Assets/image1.png')} />
                                          <Text style={styles.txtonimg}>PASSVET MEN CAPTEK..</Text>
                                          <Text  style={styles.txton7}>75.00</Text>
                                        </View>
                                        <Image style={styles.imgh} source={require('../Assets/heartwhite.png')} />
                                    </View>
                                </View>
                                <View style={styles.txman}>
                                    <View style={styles.imgfl}>
                                        <View>
                                        <Image style={styles.img2} source={require('../Assets/image2.png')} />
                                        <Text style={styles.txtonimg2}>HEAVEN BY MARC JAC..</Text>
                                        <Text  style={styles.txton7}>85.00</Text>
                                        </View>
                                        <Image style={styles.imgh} source={require('../Assets/heartwhite.png')} />
                                </View>
                                </View>
                                <View style={styles.txman}>
                                    <View style={styles.imgfl}>
                                        <View>
                                        <Image style={styles.img3} source={require('../Assets/image3.png')} />
                                        <Text style={styles.txtonimg3}>PASSVET MEN CAPTEK.</Text>
                                        <Text  style={styles.txton7}>75.00</Text>
                                        </View>
                                        <Image style={styles.imgh} source={require('../Assets/heartwhite.png')} />
                                    </View>
                                </View>
                                <View style={styles.txman}>
                                    <View style={styles.imgfl}>
                                        <View>
                                        <Image style={styles.img1} source={require('../Assets/image1.png')} />
                                        <Text style={styles.txtonimg}>PASSVET MEN CAPTEK..</Text>
                                        <Text  style={styles.txton7}>85.00</Text>
                                        </View>
                                       <Image style={styles.imgh} source={require('../Assets/heartwhite.png')} />
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.circl}>
                <Image style={styles.heimg} source={require('../Assets/heart.png')} />
            </View>
        </>
    )
}
export default DetailSearch
const styles = StyleSheet.create({
    main2: {
        flex: 1,
        backgroundColor: '#221D28',
        padding: 10,
        // height: hp('124%'),
    },
    txtmain1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    txtv: {
        color: LightYellow,
        fontSize: hp('2.4%'),
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: hp('0.1%'),
        marginLeft: hp('1%'),
    },
    txtbo: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: LightYellow,
        height: hp('5%'),
        width: wp('45%'),
        borderRadius: 7,
    },
    txtbo2: {
        flexDirection: 'row',
        backgroundColor: '#333333',
        borderRadius: 7,
        height: hp('5%'),
        width: wp('45%'),
    },
    img: {
        marginLeft: hp('2.5%'),
        alignSelf: 'center',
        height: hp('2.5%'),
        width: wp('4.5%'),
    },
    imgs: {
        marginLeft: hp('1%'),
        alignSelf: 'center',
        height: hp('2.5%'),
        width: wp('4.5%'),
    },
    txtt: {
        color: '#8C8C8C',
        fontSize: hp('1.9%'),
        marginTop: hp('1.5%'),
        padding: 5,
        fontWeight: '500',
    },
    txttt: {
        color: White,
        alignSelf: 'center',
        marginTop: hp('0.6%'),
    },
    txma1: {
        backgroundColor: '#333333',
        height: hp('4%'),
        width: wp('10%'),
        borderRadius: 14,
        marginLeft: hp('1%'),
    },
    txtadima: {
        color: White,
        padding: 6,
        fontSize: hp('2.1%'),
        fontWeight: '700',
        marginTop: hp('1.9%'),
    },
    txtADDI: {
        color: '#8C8C8C',
        marginLeft: hp('1%'),
        fontSize: hp('1.6%'),
        marginTop: hp('-1.1%'),
    },
    txt66: {
        color: LightYellow,
        padding: 7,
        fontSize: hp('2.5%'),
        fontWeight: '500',
    },
    txtA7: {
        color: White,
        fontSize: hp('1.8%'),
        fontWeight: '700',
        marginTop: hp('1.1%'),
    },
    txt6main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txt11: {
        color: White,
        marginTop: hp('1.6%'),
    },
    txt66mn: {
        flexDirection: 'row',
    },
    shoebac: {
        backgroundColor: White,
        flexDirection: 'row',
        height: hp('55%'),
        width: wp('80%'),
        marginLeft: hp('4%'),
    },
    shoeimg: {
        width: wp('80%'),
        height: hp('34%'),
        marginTop: hp('6%'),
    },
    circl: {
        backgroundColor: LightYellow,
        height: hp('8%'),
        width: wp('15%'),
        borderRadius: 50,
        alignSelf: 'center',
        marginLeft: hp('42%'),
        marginTop: hp('-8%'),
    },
    heimg: {
        height: hp('4%'),
        width: wp('8%'),
        alignSelf: 'center',
        marginTop: hp('2%'),
    },
    hrline: {
        height: hp('0.03%'),
        width: wp('92%'),
        backgroundColor: '#c8c8c',
        marginTop: hp('1%'),
        alignSelf: 'center',
    },
    heimg1: {
        height: hp('2.5%'),
        width: wp('5%'),
        marginLeft: hp('1%'),
        marginTop: hp('2%'),
    },
    txtprod: {
        color: White,
        fontSize: hp('2.2%'),
        fontWeight: '700',
        marginTop: hp('3%'),
    },
    maina: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    txman: {
        backgroundColor: '#999999',
        height: hp('30%'),
        width: wp('50%'),
        borderRadius: 5,
        margin: 5,
    },
    txta: {
        color: LightYellow,
        fontSize: hp('1.6%'),
        marginVertical: wp('1.4%'),
        marginLeft: hp('2%'),
    },
    img1: {
        alignSelf: 'center',
        height: hp('26%'),
        width: wp('52%'),
    },
    img2: {
        alignSelf: 'center',
        height: hp('30%'),
        width: wp('55%'),
    },
    img3: {
        alignSelf: 'center',
        height: hp('30%'),
        width: wp('55%'),
    },
    imgh: {
        height: hp('2.5%'),
        width: wp('5%'),
        marginLeft: hp('-6%'),
        marginTop: hp('2%'),
    },
    imgfl: {
        flexDirection: 'row',
    },
    txtonim:{
        color:White,
    },
    txtonimg:{
       color:White,
       marginTop:hp('-13%'),
       alignSelf: 'center',
       fontSize: hp('2.2%'),
       fontWeight: '700',
    },
    txton7:{
        color:White,
        alignSelf: 'center',
        fontSize: hp('2.2%'),
    },
    txtonimg2:{
        color:White,
        marginTop:hp('-17%'),
        alignSelf: 'center',
        fontSize: hp('2.1%'),
        fontWeight: '700',
    },
    txtonimg3:{
        color:White,
        marginTop:hp('-17%'),
        alignSelf: 'center',
        fontSize: hp('2.12%'),
        fontWeight: '700',
    },
})