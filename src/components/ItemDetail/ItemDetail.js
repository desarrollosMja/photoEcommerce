import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ItemCount from "../ItemList/ItemCount"

const ItemDetail = (props) => {

    const producto = props.producto

    return (
        <Card className="m-3 box-shadow" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.thumbnail} style={{ width: '200px', height: "auto" }} />
            <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>
                    {producto.title}<br/>
                    <span>Precio: $ {producto.price}</span><br/>
                    <span>Stock disponible: {producto.available_quantity}</span>
                </Card.Text>
                <div class="d-flex align-items-baseline">
                    <Button variant="primary">Agregar al carrito</Button>
                    <ItemCount stock={5} initial={1} onAdd={() => {}}/>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail