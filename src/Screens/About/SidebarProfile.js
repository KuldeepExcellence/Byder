import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Topbarback from '../../Components/Topbarback'
import { LightYellow, White, MainBlack } from '../../Components/ColorConst/ColorConst';
import ImageCropPicker from 'react-native-image-crop-picker';


const SidebarProfile = ({ navigation }) => {

    const [frontimage, setFrontimage] = useState(null);
    const [showoption, setShowoption] = useState(false);

    const openGalleryFron = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(frontimage => {
            console.log(frontimage);
            setShowoption(false)
            setFrontimage(frontimage.path)
        });
    }


    return (
        <>
            <StatusBar backgroundColor={'#000'} />
            <View style={styles.man}>
                <View style={styles.Topimg}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        {/* <Image style={styles.backim} source={require('../../Assets/left.png')} tintColor={LightYellow} /> */}

                        <Text style={styles.bac}>Close</Text>
                    </TouchableOpacity>
                    <Text style={[styles.txtMain, { color: White }]}>Profile</Text>
                    {frontimage ?
                    <TouchableOpacity onPress={() => setFrontimage(null)} >
                    <Text style={[styles.bac,{marginLeft: wp("24%")}]}>SignOut</Text>
                    </TouchableOpacity>
                    : null }
                </View>
            </View>
            <View style={styles.MainFlex}>
                <View style={styles.MainImgView}>
                    {frontimage ?
                        <Image source={{ uri: frontimage }} style={styles.ProfileImg} />
                        :
                        <Image source={require('../../Assets/prIcon.png')} style={styles.ProfileImg} tintColor='#6f7072'/>
                    }
                    <TouchableOpacity onPress={() => openGalleryFron()} style={styles.cameratOuch}>

                        <Image source={require('../../Assets/CameraPic.png')} style={styles.CameraImg} tintColor='#fff' />

                    </TouchableOpacity>
                    <View style={{ alignItems:"center", marginTop: hp('5.5%') }}>
                        <Text style={styles.txtName}>Byder Team</Text>
                        <Text style={[styles.txtName, { fontSize: hp('2%'),color:'grey' }]}>byderteam@gmail.com</Text>
                    </View>

                </View>
            </View>
        </>
    )
}

export default SidebarProfile

const styles = StyleSheet.create({
    MainFlex: {
        flex: 1,
        backgroundColor: '#15181e',
        padding: 10
    },
    man: {
        backgroundColor: MainBlack,
        height: hp('5%')
    },
    Topimg: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: "flex-start",
    },
    txtMain: {
        fontSize: hp('2.4%'),
        color: LightYellow,
        fontWeight: '700',
        marginLeft: wp("26%")
    },
    backim: {
        width: wp('5%'),
        height: hp('2.5%'),
        marginLeft: wp("2%")
    },
    bac: {
        fontSize: hp('2.2%'),
        color: LightYellow,
        fontWeight: '400',
        marginLeft:wp('6%')
    },
    MainImgView: {
        // flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ProfileImg: {
        height: hp('18%'),
        width: wp('36%'),
        borderRadius: 999,
        marginVertical: hp('1.2%')
    },
    cameratOuch: {
        height: hp('5%'),
        width: wp('10%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#dafda5",
        borderRadius:999,
        marginLeft:wp('25%'),
        marginTop: hp('-10.2%'),
        borderWidth:1,
        borderColor:'#000'
    },
    CameraImg: {
        height: hp('2.8%'),
        width: wp('5.6%'),
        // borderRadius:999,

    },
    txtName: {
        fontSize: hp('2.4%'),
        color: 'white',
        fontWeight: "700",
  
    },
})