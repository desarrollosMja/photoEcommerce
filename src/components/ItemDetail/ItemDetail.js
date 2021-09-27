import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"

const ItemDetail = (props) => {

    const {id, name, categoria, description, price, stock, pictureUrl} = props.producto

    const [cantidad, setCantidad] = useState(0)

    const agregarAlCarrito = (data) => {            
        setCantidad(data)
    }

    return (
        <div id="itemDetailDiv">
            <h1>{name}</h1>
            <h6>{categoria}</h6>
            <hr/>
            <img src={pictureUrl}></img>
            <p>{description}</p>
            <h3>Precio: $ {price}</h3>
            <h4>Unidades disponibles: {stock}</h4>
            <ItemCount stock={10} initial={1} onAdd={agregarAlCarrito}/>
        </div>
    )
}

export default ItemDetail