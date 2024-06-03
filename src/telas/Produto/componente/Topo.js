import React from "react";
import { StatusBar, Image, StyleSheet} from "react-native";

import hamburgue from '../../../../assets/nocta.jpg';
import Texto from '../../../componentes/Texto'

export default function Topo({titulo}) {
    return <>
    <StatusBar/>
    <Image style={styles.imagem} source ={hamburgue}></Image>
    <Texto style={styles.titulo}>{titulo}</Texto>
    
    </>
  }

const styles = StyleSheet.create({
  imagem: {
    width: "100%",
    height: 340,
  },
  titulo: {  
    fontSize: 20,
    color: 'blue',
    position: "absolute",
    textAlign: 'center',   
    fontWeight: 'bold',
    padding: 10,
  
  },
  logo:{
    width: 70,
    height: 70,
  },
  container:{
    backgroundColor: "black"
  }
});