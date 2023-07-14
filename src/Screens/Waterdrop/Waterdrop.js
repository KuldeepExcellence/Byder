
import React, { useRef } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, StatusBar } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { sidebarBlack, LightYellow } from '../../Components/ColorConst/ColorConst';
import Topbar from '../../Components/Topbar';


const photoCards = [
  {
    name: 'Austin Wade',
    age: 22,
    photo: require('../../Assets/jacket.png'),
    key: 'caseex6qfO4TPMYyhorner',
  },
  {
    name: 'Aleksander Borzenets',
    age: 28,
    photo: require('../../Assets/image1.png'),
    key: 'ozda-XbeP0k',
  },
  {
    name: 'Don Delfin Espino',
    age: 29,
    photo: require('../../Assets/jacket.png'),
    key: 'nBywXevf_jE-',
  },
  {
    name: 'Eduardo Dutra',
    age: 30,
    photo: require('../../Assets/image2.png'),
    key: 'ZHy0efLnzVc',
  },
  {
    name: 'Wesley Tingey',
    age: 21,
    photo: require('../../Assets/jacket.png'),
    key: 'TvPCUHten1o',
  },
  {
    name: 'Gift Habeshaw',
    age: 26,
    photo: require('../../Assets/image3.png'),
    key: 'dlbiYGwEe9U',
  },
  {
    name: 'Henri Pham',
    age: 30,
    photo: require('../../Assets/jacket.png'),
    key: 'Ml4tr2WO7JE',
  },
  {
    name: 'Nico Marks',
    age: 24,
    photo: require('../../Assets/image2.png'),
    key: 'mFcc5b_t74Q',
  },
  {
    name: 'Sirio',
    age: 28,
    photo: require('../../Assets/jacket.png'),
    key: "Ty4f_NOFO60'",
  },
  {
    name: 'Teymi Townsend',
    age: 30,
    photo: require('../../Assets/image3.png'),
    key: "AvLHH8qYbAI'",
  },
  {
    name: 'Caique Silva',
    age: 20,
    photo: require('../../Assets/jacket.png'),
    key: "3ujVzg9i2EI'",
  },
  {
    name: 'David Yanutenama',
    age: 21,
    photo: require('../../Assets/image1.png'),
    key: "5AoO7dBurMw'",
  },
]

const height = Dimensions.get('window').height
const Waterdrop = ({ navigation }) => {
  const useSwiper = useRef(null).current
  const handleOnSwipedLeft = () => useSwiper.swipeLeft()
  const handleOnSwipedTop = () => useSwiper.swipeTop()
  const handleOnSwipedRight = () => useSwiper.swipeRight()


  const Card = ({ card }) => (

    <View>
      <View activeOpacity={1} style={styles.card}>
        <View style={styles.imgView}>
          <Image
            style={styles.image}
            source={card.photo}
            resizeMode="cover"
          />

        </View>

        <View style={styles.photoDescriptionContainer}>
          <Text style={styles.text}>
            {`${card.name}, ${card.age}`}
          </Text>
          <View style={styles.txtprlocation}>
            <Text style={styles.pricetxt}>112.00 $</Text>
            <Text style={styles.locationtxt}>A 75.32155</Text>
          </View>
          <View style={styles.hrWidth} />

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.viewNext}
              onPress={handleOnSwipedLeft}
            >
              <Image source={require('../../Assets/arrowTinder.png')} tintColor='#ff0000' style={{ height: 20, width: 20 }} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.viewNext, { backgroundColor: '#ccffcc' }]}
              onPress={handleOnSwipedRight}
              color="white"
              backgroundColor="#E5566D"
            >
              <Image source={require('../../Assets/heart.png')} tintColor='#79ff4d' style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
            {/* <TouchableOpacity
            // name="star"
            onPress={handleOnSwipedTop}
            color="white"
            backgroundColor="#3CA3FF"
          >
            <Image source={require('../../Assets/heart.png')} style={{ height: 40, width: 50 }} />
          </TouchableOpacity>
          <TouchableOpacity
            // name="heart"
            onPress={handleOnSwipedRight}
            color="white"
            backgroundColor="#4CCC93"
          >
            <Image source={require('../../Assets/heart.png')} style={{ height: 40, width: 50 }} />
          </TouchableOpacity> */}
          </View>
        </View>
      </View>

    </View>
  )



  return (
    <>
      <StatusBar backgroundColor={'#000'} />
      <View >
        <Topbar Textheading={'Mi Perfil'} navigation={navigation} />
      </View>
      <View style={styles.MainFlex}>
        <View>

     
        <Swiper
          ref={useSwiper}
          animateCardOpacity
          containerStyle={styles.container}
          cards={photoCards}
          renderCard={card => <Card card={card} />}
          cardIndex={0}
          backgroundColor="white"
          stackSize={2}
          infinite
          showSecondCard
          animateOverlayLabelsOpacity
        />
           </View>
      </View>

    </>)
}
export default Waterdrop

const styles = StyleSheet.create({
  MainFlex: {
    flex: 1,
    backgroundColor: '#15181e',
    padding: 10
  },
  card: {
    /* Setting the height according to the screen height, it also could be fixed value or based on percentage. In this example, this worked well on Android and iOS. */
    height: height - 180,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#15181e',
    borderWidth:0.6,
    borderColor:'#000',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.9,
    elevation: 2,

  },

  imgView: {
    height: hp('48%'),
    width: wp('89.6%'),
    alignItems: "center",
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  image: {

    height: hp('30%'),
    width: wp('65%')
  },
  photoDescriptionContainer: {
    // alignItems:"flex-start",
    // justifyContent:'flex-start',
    paddingLeft: 15,
    paddingTop: 6

  },
  text: {
    fontSize: hp('2.5%'),
    color: 'white',
    fontWeight: "700",
    fontFamily: 'Avenir',
    textShadowColor: 'black',
    textShadowRadius: 10,
  },
  txtprlocation: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: hp('0.3%')
  },

  pricetxt: {
    fontSize: hp('2.4%'),
    color: LightYellow,
    fontWeight: "600",
    fontFamily: 'Avenir',
    textShadowColor: 'black',
  },
  locationtxt: {
    fontSize: hp('2.4%'),
    color: 'white',
    fontWeight: "600",
    fontFamily: 'Avenir',
    textShadowColor: 'black',
    marginLeft: wp('30%')
  },
  hrWidth: {
    height: hp('0.4%'),
    width: wp('79.5%'),
    backgroundColor: '#808080',
    marginVertical: hp('1.5%')
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: wp('5.5%')
  },
  viewNext: {
    height: hp('5.4%'),
    width: wp('38%'),
    backgroundColor: '#ffb3b3',
    marginVertical: hp('1.5%'),
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
})