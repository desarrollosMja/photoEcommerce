import CartWidget from "./CartWidget"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"

const NavBar = () => {

    return (

        <Navbar bg="primary" variant="dark">
            <Container className="align-items-center">
                <Container>
                    <h1>El obturador</h1>
                    <h3 className="fs-5">Tienda de fotografía</h3>
                </Container>
                <Nav className="me-auto ms-5">
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