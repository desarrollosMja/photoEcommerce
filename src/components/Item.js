import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const Item = (props) => {

    const {id, name, description, price, stock, pictureUrl} = props.item

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pictureUrl} style={{ width: '300px', height: "auto" }} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}<br/>
                    <span>Precio: $ {price}</span><br/>
                    <span>Stock disponible: {stock}</span>
                </Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default Item