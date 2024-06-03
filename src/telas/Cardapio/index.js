import React from "react";
import {FlatList, StyleSheet, View, StatusBar, Image} from 'react-native';

import Menu from './componenteCardapio/Menu';
import bk from '../../../assets/iconn.png';


export default function Index({titulo, lanches}) {
    
    return <View style={styles.container}>
              <StatusBar/>
              <Image style={styles.logo}source ={bk} resizeMode="contain"/>
              
                  <FlatList   
                data={lanches.lista}
                renderItem={Menu}
                keyExtractor={lanches.lista.nome}
                numColumns={2}
              />
  </View>

}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height:"100%",
    backgroundColor: "black",
    flex:1,
  },
  logo: {
    width: "100%",
    height: "20%",
    marginTop: 50
  },
})
