import { StyleSheet, Text, View, ScrollView, Image, useWindowDimensions, ImageBackground } from 'react-native'
import React from 'react'
import { Black, LightYellow, White } from './ColorConst/ColorConst';

const Customcarousel = ({ data }) => {
    return (
        <ScrollView horizontal>
            {data.map((item, index) => {
                const { width } = useWindowDimensions();
                const SIZE = width * 0.7;
                return (
                    <View style={{ width: SIZE, padding: 2 }}>
                        <View style={styles.maincard}>
                            <View style={styles.Imagecontainer}>
                                <ImageBackground source={item.image} style={styles.image} />
                                <Text style={styles.textColor}>BRADHY</Text>
                                <Text style={styles.txtclr}>Leggings Mocha</Text>
                                <Text style={styles.txtdlr}>$49.70</Text>
                                <View style={styles.maintx}>  
                                    <Text style={styles.txtclr}>Centro</Text> 
                                <Text style={styles.txtclr}>7101.4km</Text>
                            </View>
                            </View>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    )
}

export default Customcarousel

const styles = StyleSheet.create({
    Imagecontainer: {
        borderRadius: 20,
        overflow: 'hidden',
        padding: 2,
        backgroundColor: 'grey',
        height: 291,

    },
    image: {
        width: '134%',
        height: 200,
        aspectRatio: 1,
    },
    textColor: {
        color: LightYellow,
        fontWeight: '500',
        fontSize: 15
    },
    txtclr: {
        color: White,
        fontWeight: '500',
        fontSize: 15
    },
    txtdlr: {
        color: '#404040',
        fontWeight: '500',
        fontSize: 15
    },
    maintx:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
    },
})