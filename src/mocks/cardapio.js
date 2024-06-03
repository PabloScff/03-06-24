import batata_frita from "../../assets/batata.jpg";
import Bacon from "../../assets/nb480.png";
import Picanha from "../../assets/travis.jpg";
import Salmao from "../../assets/adi2.png";
import Salada from "../../assets/CAMPUS.jpg";

const cardapio = {
    titulo: {
        ti: "Cardápio",
    },  
    lanches: {
        lista: [
            {
                nome: "New Balance 480",
                preco: "R$ 500,00",
                ingredientes: "Tênis New Balance 480 Low Masculino - Azul+Branco",
                imagem: Bacon,
            },
            {
                nome: "Campus",
                preco: "R$ 800,00",
                ingredientes: "Adidas Campus 80 x South Park Low Towelie",
                imagem: Salada,
            },
            {
                nome: "Air Jordan 1",
                preco: "R$ 1200,00",
                ingredientes: "Tênis Nike Air Jordan 1 Low Retro x Travis Scott SP “Dark Mocha”",
                imagem: Picanha,
            },
            {
            nome: "Adi2000",
                preco: "R$ 800,00",
                ingredientes: "Descubra o estilo poderoso e ousado dos anos 2000 com os tênis adidas adi2000 .",
                imagem: Salmao,
            },
        ]
    },
} 

export default cardapio;