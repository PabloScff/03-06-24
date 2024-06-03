import React from "react";
import { FlatList, View, Text, Image } from 'react-native';

import Topo from './componente/Topo';
import Detalhes from './componente/Detalhes';
import Item from './componente/Item';

 export default function Index({topo, detalhes, itens}) {
   
   /*const renderItem = ({item:{nome, imagem}}) => <View key={nome}>
                              <Image source={imagem}/>
                              <Text>{nome}</Text>
                            </View>
 */
   return <FlatList   
        data={itens.lista}
        renderItem={Item}
        keyExtractor={itens.lista.nome}
        ListHeaderComponent={() =>{
          return<>
              <Topo {...topo}/>
              <Detalhes {...detalhes}/>
          </>
        }}
      />
}

