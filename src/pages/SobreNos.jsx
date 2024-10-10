import Cartao from "../components/Cartao/Cartao"
import ListContainer from "../components/ListContainer/ListContainer"
import Base from "./Base"

const dados = [
    {
        titulo: "Primeiro titulo do Array",
        texto: "Primeiro texto do Array"
    },
    {
        titulo: "Segundo titulo do Array",
        texto: "Segundo texto do Array"
    },
]

const SobreNos= () => (
    <Base>
        <ListContainer>
        {
            dados.map( (ele, i) => (
                <Cartao
                    key={i}
                    titulo={ele.titulo}
                    texto={ele.texto}
                />
            ))
        }
        </ListContainer>
    </Base>
    
)

export default SobreNos