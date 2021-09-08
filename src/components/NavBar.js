import CartWidget from "./CartWidget"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"

const NavBar = () => {
    return (

        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">La cafetería de Jose</Navbar.Brand>
                <Nav className="me-auto" variant="pills">
                    <Nav.Link href="#home">Quienes somos</Nav.Link>
                    <Nav.Link href="#features">Nuestros productos</Nav.Link>
                    <Nav.Link href="#pricing">Contacto</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar