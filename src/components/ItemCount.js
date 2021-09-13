import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [contador, setContador] = useState(initial)
    
    return (
        <>
            <div id="item">
                <button id="incrementar" onClick={() => {
                        if (contador < stock){
                            setContador(contador+1)
                        }
                    }}>
                    +
                </button>
                <p id="contadorPlace">{contador}</p>
                <button id="decrementar" onClick={() => {
                        if (contador > 0){
                            setContador(contador-1)
                        }
                    }}>
                    -
                </button><br></br>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount