import Bacon from "../../assets/ben.png";
import porcao from "../../assets/nb550.png";
import Rodizio from "../../assets/campus.png";

const produto = {
    topo: {
        titulo: "Detalhes do Produto",
    },
    detalhes: {
        nome: "Nocta x Nike",
        descricao: "Nocta x Nike Hot Step 2 White",
        nome2: "R$1200,00",
        botao: "Adicionar na Lista de Pedidos "
    },
    itens: {
        titulo: "Item do Kit",
        lista: [
            {
                nome: "Adidas Campus 00s" ,
                imagem: Rodizio,
            },
            {
                nome: "Nike SB Dunk Low Ben & Jerry's",
                imagem: Bacon,
            },
            {
                nome: "New Balance 550",
                imagem: porcao,
            },
        ]
    }
} 

export default produto;