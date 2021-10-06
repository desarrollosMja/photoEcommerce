import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { contextoCarrito } from "../Context/CartContext"

const Item = (props) => {

    let {id, name, categoria, description, price, stock, pictureUrl, cantidadComprada} = props.item
    
    const carrito = useContext(contextoCarrito)

    const agregarAlCarrito = (cantidad) => {
        cantidadComprada = cantidad
        carrito.addItem({id, name, categoria, description, price, stock, pictureUrl, cantidadComprada}, cantidad)
    }

    return (
        <Card className="m-3 box-shadow" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pictureUrl} style={{ width: '200px', height: "auto" }} />
            <Card.Body>
                <Link item={props.item} to={`/item/${id}`}><Card.Title>{name}</Card.Title></Link>
                <Card.Text>
                    <span>Precio: $ {price}</span><br/>
                    <span>Stock disponible: {stock}</span>
                </Card.Text>
                <div class="d-flex align-items-baseline">
                    <ItemCount stock={stock} initial={1} onAdd={(cantidad) => agregarAlCarrito(cantidad)}/>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Item

