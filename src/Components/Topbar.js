import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LightYellow, MainBlack, White } from './ColorConst/ColorConst';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Topbar = ({ Textheading, navigation }) => {
  return (
    <View style={styles.man}>
      <View style={styles.Topimg}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image style={styles.navi} source={require('../Assets/navigation.png')} tintColor={LightYellow} />
        </TouchableOpacity>
        <Text style={styles.txtMain}>{Textheading}</Text>
      </View>
    </View>
  )
}

export default Topbar

const styles = StyleSheet.create({
  man: {
    backgroundColor: MainBlack,
  },
  Topimg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-start",

  },
  txtMain: {
    fontSize: hp('2.4%'),
    color: White,
    fontWeight: '700',
    marginLeft: wp("35%")
  },
  navi: {
    width: wp('8%'),
    height: hp('5%'),
  },
})