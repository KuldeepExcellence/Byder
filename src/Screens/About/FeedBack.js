import { StyleSheet, Text, ScrollView, View, StatusBar,TouchableOpacity,Image } from 'react-native'
import React from 'react';
import Topbarback from '../../Components/Topbarback';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput } from 'react-native-gesture-handler';

const FeedBack = ({ navigation }) => {
    const [number, onChangeNumber] = React.useState('');
    return (
        <>
            <StatusBar backgroundColor={'#000'} />
            <Topbarback Textheading={'Send feedback'} navigation={navigation} />
            <ScrollView style={styles.MainFlex}>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-between"}}>
                    <Text style={styles.txtxview}>From</Text>
                    <Text style={styles.txtxview}>Required</Text>
                </View>
                <TextInput
                    style={styles.inputFrom}
                    multiline={true}
                    // textAlignVertical= 'top'
                    // numberOfLines={1}
                    onChangeText={(e) => onChangeNumber(e)}
                    value={number}
                    placeholder="byderteam@gmail.com"
                    placeholderTextColor='#fff'
                
                    
                />

                <View style={{marginTop:hp('2%')}}>
                    <Text style={styles.txtxview}>Message</Text>
                </View>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    textAlignVertical= 'top'
                    numberOfLines={45}
                    onChangeText={(e) => onChangeNumber(e)}
                    value={number}
                    placeholder="message"
                    placeholderTextColor={'#47494c'}
                    
                />

            </ScrollView>
        </>
    )
}

export default FeedBack

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
    inputFrom: {
        backgroundColor: '#272a30',
        borderRadius: 10,
        // height: hp('40%'),
        marginTop: hp('1.1%'),
        // borderWidth: 1,
        padding: 10,
    },
    input: {
        backgroundColor: '#272a30',
        borderRadius: 10,
        height: hp('40%'),
        marginTop: hp('1.1%'),
        // borderWidth: 1,
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