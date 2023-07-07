import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { LightYellow, White } from './ColorConst/ColorConst';

const Inputsearch = () => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
  return (
    <>
    <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Buscar..."
        placeholderTextColor={'#737373'}
       
      />
    </>
  )
}

export default Inputsearch

const styles = StyleSheet.create({
    input: {
        backgroundColor:'#333333',
        height: 40,
        // margin: 12,
        borderWidth: 1,
        padding: 5,
        paddingLeft: 14,
        borderRadius:10,
        borderColor:LightYellow,
      
      },
})