import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ItemCount from "./ItemCount"

const Item = (props) => {

    const {id, name, description, price, stock, pictureUrl} = props.item

    return (
        <Card className="m-3 box-shadow" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pictureUrl} style={{ width: '200px', height: "auto" }} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}<br/>
                    <span>Precio: $ {price}</span><br/>
                    <span>Stock disponible: {stock}</span>
                </Card.Text>
                <div class="d-flex align-items-baseline">
                    <Button variant="primary">Agregar al carrito</Button>
                    <ItemCount stock={5} initial={1} onAdd={() => {}}/>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Item