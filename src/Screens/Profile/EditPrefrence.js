import { StyleSheet, Text, View, StatusBar, ScrollView, Image } from 'react-native'
import React from 'react'
import Topbarback from '../../Components/Topbarback';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LightYellow, MainBlack, White } from '../../Components/ColorConst/ColorConst';
import { TouchableOpacity } from 'react-native-gesture-handler';
const EditPrefrence = ({ navigation }) => {
  return (
    <>
      <StatusBar backgroundColor={'#000'} />
      {/* <Topbarback Textheading={'Mis Preferencias'} navigation={navigation} /> */}
      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.txt}>Rellenando tus preferencias,Ias {'\n'}
            prendas que veras dentro de la app {'\n'}seran mas relevantes para tus gustos.</Text>
          <View style={styles.hrline} />
          <Text style={styles.txtq}>
            Quiero ver prendas de
          </Text>
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
          <Text style={styles.txtq}>
            Elige tusmarcas favoritas
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('favorites')}>
            <View style={styles.ree}>
              <View style={styles.r1}>
              </View>
              <Image style={styles.de} source={require('../../Assets/delete.png')} />
            </View>
          </TouchableOpacity>
          <View style={styles.hrline} />
          <View style={styles.ac}>
            <Image style={styles.ch} source={require('../../Assets/check.png')} />
            <Text style={styles.actx}>
              Actualizar
            </Text>
          </View>
          <View style={styles.re}>
            <Image style={styles.de} source={require('../../Assets/delete.png')} />
            <Text style={styles.retx}>
              Restaurar preferencias
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  )
}
export default EditPrefrence
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#221D28',
    height: hp('110%'),
  },
  txt: {
    color: White,
    fontSize: hp('2.7%'),
    alignSelf: 'center',
    fontWeight: '700',
    marginTop: hp('2%'),
  },
  hrline: {
    height: hp('0.1%'),
    width: wp('92%'),
    backgroundColor: '#999999',
    marginTop: hp('1%'),
    alignSelf: 'center',
  },
  txtq: {
    color: '#999999',
    padding: 14,
  },
  ll: {
    backgroundColor: '#333333',
    height: hp('4%'),
    width: wp('10%'),
    marginLeft: hp('2%'),
    borderRadius: 20,
  },
  mi: {
    alignSelf: 'center',
    marginTop: hp('1%'),
  },
  hom: {
    backgroundColor: LightYellow,
    height: hp('4%'),
    width: wp('20%'),
    marginLeft: hp('0.5%'),
    borderRadius: 20,
  },
  homtx: {
    color: MainBlack,
    fontWeight: '600',
    marginTop: hp('0.7%'),
    alignSelf: 'center',
  },
  mainnn: {
    flexDirection: 'row',
  },
  muj: {
    backgroundColor: '#333333',
    height: hp('4%'),
    width: wp('20%'),
    marginLeft: hp('0.5%'),
    borderRadius: 20,
  },
  mujtx: {
    color: White,
    fontWeight: '600',
    marginTop: hp('0.7%'),
    alignSelf: 'center',
  },
  ac: {
    backgroundColor: '#333333',
    height: hp('6%'),
    width: wp('95%'),
    marginLeft: hp('0.5%'),
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp('1.9%'),
    flexDirection: 'row',
  },
  actx: {
    color: LightYellow,
    fontSize: hp('2.3%'),
    fontWeight: '600',
    marginTop: hp('0.3%'),
    marginLeft: hp('1.5%'),
    alignSelf: 'center',
  },
  ch: {
    alignSelf: 'center',
    marginTop: hp('0.3%'),
    width: wp('5.5%'),
    marginLeft: hp('16.5%'),
  },
  retx: {
    color: '#FF531A',
    fontSize: hp('2.3%'),
    fontWeight: '600',
    marginTop: hp('0.1%'),
    marginLeft: hp('1.5%'),
    alignSelf: 'center',
  },
  de: {
    alignSelf: 'center',
    marginTop: hp('0.3%'),
    width: wp('5.5%'),
    marginLeft: hp('10.5%'),
    height: hp('3%'),
  },
  re: {
    backgroundColor: '#333333',
    height: hp('6%'),
    width: wp('95%'),
    marginLeft: hp('0.5%'),
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp('1.9%'),
    flexDirection: 'row',
  },
  r1: {
    backgroundColor: '#595959',
    height: hp('4.5%'),
    width: wp('9%'),
    borderRadius: 30,
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
})