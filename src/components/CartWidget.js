import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

const CartWidget = () => {
    return (
        <Button variant="turquesa">
            <i class="bi bi-cart"></i>
            <Badge pill bg="primary" text="light" className="ms-2">0</Badge>
        </Button>
    )
}

export default CartWidget