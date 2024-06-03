import React from "react";
import {FlatList, Image, ScrollView } from 'react-native';

//import styles from './estilos';
//import Texto from '../../componentes/Texto';
import Historia from './componenteSobre/Historia';

export default function Index({trajetoria}) {
    // return <ScrollView style={styles.container}>
    //     <Image source={info.logo} style={styles.logo} resizeMode="contain" />
    //     <Texto style={styles.trajetoria}>{traje}</Texto>
    // </ScrollView>
    return <FlatList   
    ListHeaderComponent={() =>{
      return<>
          <Historia {...trajetoria}/>
          
      </>
    }}
  />

}