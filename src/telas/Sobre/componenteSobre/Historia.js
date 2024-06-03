import React from "react";
import {View, Image} from "react-native";

import logo from '../../../../assets/logo_final (1).png';
 import fome from '../../../../assets/preto.png';
import Texto from '../../../componentes/Texto';
import styles from '../estilos';

export default function Historia({traje}) {
    return <>
    <View style={styles.container}>
      <Image style={styles.logo}source ={logo} resizeMode="contain"/> 
      <Texto style={styles.trajetoria}>{traje}</Texto>
      { <Image style={styles.im}source ={fome} resizeMode="contain"/>  }
    </View>
    </>
  }