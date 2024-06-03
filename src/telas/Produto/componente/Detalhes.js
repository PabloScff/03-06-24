import React from "react";
import { Image, StyleSheet, View, Alert } from "react-native";

import bk from '../../../../assets/iconn.png';
import Texto from '../../../componentes/Texto';
import Botao from '../../../componentes/Botao';

export default function Detalhes({nome, nome2, descricao,botao}) {
    return <>
    <View style={styles.container}>
      <View style={styles.logotipo}>
        <Image style={styles.logo}source ={bk} resizeMode="contain"/>
        <Texto style={styles.nome}>{nome}</Texto>
      </View>
    <Texto style={styles.descricao}>{descricao}</Texto>
    <Texto style={styles.nome2}>{nome2}</Texto>
        <Botao textoBotao={botao} acaoBotao={()=>{Alert.alert("Em breve!", "Estamos preparando novidades para você");}}/>
    </View>
    </>
  }

const styles = StyleSheet.create({
  //CSS para deixar o fundo laranja
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  nome: {  
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', 
    //fontWeight: 'bold',
    padding: 10, 
    paddingTop: 20,
    paddingLeft: 5,
    
  },
  descricao: {
    fontSize: 15,
    color: 'white',
    paddingHorizontal: 20,
    fontFamily: "SpaceX",
    },
  nome2: {  
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center', 
  },
  logo:{
    width: 105,
    height: 70,
  },
  //CSS para deixar o logo e o texto a mesma linha
  logotipo:{
    flexDirection: "row",
  }  
});