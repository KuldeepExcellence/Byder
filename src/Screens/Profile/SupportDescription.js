import { StyleSheet, Text, ScrollView, View, StatusBar,TouchableOpacity,Image } from 'react-native'
import React from 'react';
import Topbar from '../../Components/Topbar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput } from 'react-native-gesture-handler';

const SupportDescription = ({ navigation }) => {
    const [number, onChangeNumber] = React.useState('');
    return (
        <>
            <StatusBar backgroundColor={'#000'} />
            {/* <Topbar Textheading={'Mi Perfil'} navigation={navigation} /> */}
            <ScrollView style={styles.MainFlex}>
                <View>
                    <Text style={styles.txtxview}>Escribenos tu Mensaje</Text>
                </View>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    textAlignVertical= 'top'
                    numberOfLines={45}
                    onChangeText={(e) => onChangeNumber(e)}
                    value={number}
                    placeholder="useless placeholder"
                    placeholderTextColor={'#47494c'}
                    
                />


                <TouchableOpacity style={styles.Buttonsecond}>
                    <Image style={[styles.Logofwhat, { tintColor: '#aac584' }]}
                        source={require('../../Assets/send.png')} />
                    <Text style={[styles.textButton, { color: '#aac584' }]}> Envair Mensaje</Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    )
}

export default SupportDescription

const styles = StyleSheet.create({
    MainFlex: {
        flex: 1,
        backgroundColor: '#15181e',
        padding: 15
    },
    txtxview: {
        fontSize: hp('2.1%'),
        color: 'grey',
        fontWeight: '500',
    },
    input: {
        backgroundColor: '#272a30',
        borderRadius: 10,
        height: hp('40%'),
        marginTop: hp('1.1%'),
        borderWidth: 1,
        padding: 10,
    },
    Logofwhat: {
        height: hp('2.2%'),
        width: wp('4.4%'),
        // height: 25,
        tintColor: '#aac584',
        marginHorizontal: 10,
      },
      Buttonsecond:{
        flexDirection: 'row',
        height: hp('5.8%'),
        width: wp('92%'),
        borderRadius: 10,
        borderWidth: 0.4,
        borderColor: '#aac584',
        alignItems: 'center',
        justifyContent: "center",
        marginTop: hp('3.8%'),
      },

})