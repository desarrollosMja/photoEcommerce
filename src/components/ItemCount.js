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
        <div id="item">
            <button id="incrementar" onClick={() => aumentarContador()}>
                +
            </button>
            <p id="contadorPlace">{contador}</p>
            <button id="decrementar" onClick={() => reducirContador()}>
                -
            </button><br/>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount