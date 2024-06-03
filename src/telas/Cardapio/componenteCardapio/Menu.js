import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

import Texto from '../../../componentes/Texto';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function Menu({ item: { nome, preco, ingredientes, imagem } }) {
  return  <View style={styles.container}>
    
      <Card mode='elevated' style={styles.card}>
        <Card.Content >
          <Texto style={styles.name}>{nome}</Texto>
          <Texto style={styles.pre}>{preco}</Texto>
          <Texto style={styles.ingre}>{ingredientes}</Texto>
          {/* <Image source={imagem} style={styles.imagem}/> */}
        </Card.Content>
        <Card.Cover style={styles.im} source={imagem} />
        {/* <Texto style={styles.titulo}>{ti}</Texto> */}

        {/* <Card>
      <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
      <Card.Content>
        <Texto variant="titleLarge">Card title</Texto>
        <Texto variant="bodyMedium">Card content</Texto>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://th.bing.com/th/id/R.df851defb9228e5fab1988b56b831d15?rik=9Ixaa6xDb4L%2few&riu=http%3a%2f%2fbestanimations.com%2fFood%2fFastFood%2fhamburger-animated-gif-6.gif&ehk=a6KW9qNUfI85bGAyYMO43d6vwz8jIu101CupinozXLs%3d&risl=&pid=ImgRaw&r=0://picsum.photos/700' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>*/}
      </Card>
    </View>
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height:"100%",
    backgroundColor: "black",
    flex:1,
  },
  titulo: {
    fontSize: 20,
  },
    im: {
       widthfull: 100,
       justifyContent: 'center',
       width: "100%",
      
   },
  card: {
    width: "100%",
    flexDirection: 'row',
    paddingTop: 10,
    margin: 5,
  },
  name:{
    fontSize: 20,
    fontWeight: 'bold',
  
  },
  pre:{
    fontSize: 15,
    
  },
  ingre:{
    fontSize: 15,
    
  },
});




