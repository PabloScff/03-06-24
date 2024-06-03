import {useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold} from "@expo-google-fonts/space-grotesk";
import { View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Produto from './src/telas/Produto';
import mock from './src/mocks/produto';

import Sobre from './src/telas/Sobre';
import mock_sobre from './src/mocks/sobre';

import Cardapio from './src/telas/Cardapio';
import mock_cardapio from './src/mocks/cardapio';



function MenuPromocao(){
  return <Produto {...mock}/>
}
function MenuSobre(){
  return <Sobre {...mock_sobre}/>
}

function MenuCardapio(){
  return <Cardapio {...mock_cardapio}/>
}

const Tab = createBottomTabNavigator();
function TabsMenu(){
  return <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) =>{
              let iconName;

              if(route.name === "Sobre nós"){
                iconName = focused
                ? 'star'
                : 'star-outline';

              } else if (route.name === "Promoções"){
                iconName = focused
                ? 'star'
                : 'star-outline';

              }else if (route.name === "Menu"){
                iconName = focused
                ?'list'
                :'list-outline'

              }else if (route.name === "Lista de Desejos"){
                iconName = focused
                ?'heart'
                :'heart-outline';
              }

              return <Ionicons name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            tabBarHideOnKeyboard: true,
            headerShown: false,
          })}>
            
            <Tab.Screen name="Sobre nós" component={MenuSobre}   />
            <Tab.Screen name="Kit" component={MenuPromocao} />
            <Tab.Screen name="Produtos" component={MenuCardapio} />
            <Tab.Screen name="Lista de Desejos" component={MenuPromocao} options={{ tabBarBadge: 3 }} />

    </Tab.Navigator>
}



export default function App() {

//Carrega a fonte para o projeto
const [ fonteCarregada ] = useFonts({
  "SpaceGRegular" : SpaceGrotesk_300Light,
  "SpaceGBold" : SpaceGrotesk_700Bold,
})

  //Checa se as fontes já foram carregadas
  if(!fonteCarregada){
    return <View />
  }

  return <> 
  
  

   <NavigationContainer> 
            <TabsMenu />
    </NavigationContainer></>
 
}