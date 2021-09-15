import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [contador, setContador] = useState(initial)

    function aumentarContador(){
        if (contador < stock){
            setContador(contador+1)
        }
    }

    function reducirContador(){
        if (contador > 0){
            setContador(contador-1)
        }
    }
    
    return (
        <div id="item" class="d-flex justify-content-evenly align-items-center">
            <button class="btn btn-primary" id="incrementar" onClick={() => aumentarContador()}>
                +
            </button>
            <p id="contadorPlace">{contador}</p>
            <button class="btn btn-primary" id="decrementar" onClick={() => reducirContador()}>
                -
            </button>
        </div>
    )
}

export default ItemCount