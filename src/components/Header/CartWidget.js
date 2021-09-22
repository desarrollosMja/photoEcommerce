import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <Link to="/cart" className="nav-link">
            <Button variant="turquesa">
                <i class="bi bi-cart"></i>
                <Badge pill bg="primary" text="light" className="ms-2">0</Badge>
            </Button>
        </Link>
    )
}

export default CartWidget