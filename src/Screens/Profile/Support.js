import {StyleSheet, Text, View, FlatList, StatusBar,TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Topbar from '../../Components/Topbar';
const Data = [
  {
    id: 1,
    text: 'Funcionamiento de la app',
  },
  {
    id: 2,
    text: 'Problemas',
  },
  {
    id: 3,
    text: ' Reembolsos',
  },
  {
    id: 4,
    text: 'Pedidos',
  },
  {
    id: 5,
    text: ' Reservas',
  },
  {
    id: 6,
    text: 'Propuestas de mejora',
  },
];
const Support = ({navigation}) => {
  const Received = ({item}) => {
    return (
      <View>
        <Text style={styles.text1}>
          {'\u2022' + ' '}
          {item.text}
        </Text>
      </View>
    );
  };
  return (
    <>
    <StatusBar backgroundColor={'#000'} />
    <View >
      <Topbar Textheading={'Mi Perfil'} navigation={navigation} />
      </View>
    <View style={styles.Container}>
      <Text style={styles.textOne}>¿Tienes alguna duda?</Text>
      <Text style={styles.texttwo}>Escribenos para dudas sobre:</Text>
      <View style={styles.ContainerOne}>
        <FlatList
          data={Data}
          style={styles.flatlist}
          renderItem={({item, index}) => (
            <Received item={item} index={index}></Received>
          )}
        />
      </View>
      <View style={styles.ContainerTwo}>
        <Text style={styles.TextThree}>¡Te necesitamos!</Text>
        <Text style={styles.TextFour}>
          No dudes en escribirnos,¡tys ideas nos importan!
        </Text>
      </View>
      <View style={styles.lineStyle1} />
      <View style={styles.MainButton}>
      <TouchableOpacity>
        <View style={styles.Button}>
          <View style={styles.firstButton}>
            <Image style={styles.Logof}
            source={require('../../Assets/email.jpg')}/>
            <Text style={styles.textButton}> Mensaje</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.ButtonOne}>
          <View style={styles.firstButton}>
            <Image style={styles.LogofW}
            source={require('../../Assets/whatsapp.png')}/>
            <Text style={styles.TextButton}> Whatsapp</Text>
          </View>
        </View>
      </TouchableOpacity>
      </View>
      <TouchableOpacity>
      <View style={styles.ButtonTwo}>
      <View style={styles.firstButton}>
            <Image
              style={styles.LogofCall}
              source={require('../../Assets/telephone.png')}
            />
            <Text style={styles.textButtonCall}>Enviar mensaje</Text>
          </View>
      </View>
      </TouchableOpacity>
    </View>
    </> );
};
export default Support;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#262626',
  },
  textOne: {
    fontSize: 21,
    color: '#fff',
    // padding:10,
    fontWeight: '500',
  },
  texttwo: {
    color: 'grey',
    fontSize: 18,
  },
  ContainerOne: {
    marginTop: 15,
  },
  text1: {
    color: '#fff',
    fontSize: 20,
  },
  ContainerTwo: {
    backgroundColor: 'gray',
    marginTop: 20,
    height: 60,
    borderRadius: 5,
  },
  TextThree: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
  TextFour: {
    color: '#fff',
    textAlign: 'center',
  },
  lineStyle1: {
    borderWidth: 0.5,
    borderColor: '#a1a4b2',
    marginTop: 20,
  },
  MainButton:{
    flexDirection: 'row',
  },
  Button: {
    backgroundColor: 'grey',
    height: 50,
    width:150,
    borderRadius: 10,
    padding: 10,
    margin: 12,
  },
  firstButton: {
    flexDirection: 'row',
  },
  textButton: {
    // textAlign: 'center',
    color: 'yellow',
    // marginHorizontal: -65,
    fontSize: 16,
  },
  Logof: {
    // margin: 10,
    height: 25,
    marginHorizontal: 10,
  },
  ButtonOne: {
    // backgroundColor: 'grey',
    height: 50,
    width:170,
    borderRadius: 10,
    padding: 10,
    margin: 12,
    borderWidth:2,
    borderColor:"green"
  },
  TextButton:{
    color:"green",
    fontSize: 16,
    marginLeft:15,
    fontWeight:"500"
  },
  LogofW:{
    height:25,
    width:25
  },
  ButtonTwo:{
    backgroundColor: 'grey',
    height: 50,
    borderRadius: 10,
    padding: 10,
    margin: 12,
  },
  textButtonCall:{
      textAlign: 'center',
      color: 'yellow',
      marginHorizontal: -65,
      fontSize: 16,
  },
  LogofCall:{
        // margin: 10,
        height: 25,
        marginHorizontal: 80,
      },
});