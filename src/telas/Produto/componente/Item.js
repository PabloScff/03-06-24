import React from "react";
import { View, Image, StyleSheet} from "react-native";

import Texto from "../../../componentes/Texto";

 export default function Item({item:{nome, imagem}}){
    return <View key={nome} style={styles.item}>
                <Image source={imagem} style={styles.imagem}/>
                <Texto style={styles.nome}>{nome}</Texto>
    </View>
 }

 const styles = StyleSheet.create({
     item: {
        backgroundColor: 'black', 
        flexDirection: "row",
         borderBottomWidth: 2,
         borderBottomColor: "blue",
         paddingVertical: 16,
         alignItems: "center",
     },
     //CSS do texto da barra de rolagem
     nome: {
         fontSize: 20,
         lineHeight: 26,
         marginLeft: 11,
         color:"white"
     },
     imagem: {
        width: 80,
        height: 80,
     }
 })