import CartWidget from "./CartWidget"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom"

const NavBar = () => {

    return (

        <Navbar bg="dark" variant="dark">
            <Container className="align-items-center">
                <Container>
                    <NavLink to="/">
                        <h1>El obturador</h1>
                        <h3 className="fs-5">Tienda de fotografía</h3>
                    </NavLink>
                </Container>
                <Nav className="me-auto ms-5">
                    <NavLink className="nav-link" to={"/categoria/1"}>Cámaras de foto</NavLink>
                    <NavLink className="nav-link" to={"/categoria/2"}>Accesorios</NavLink>
                    <NavLink className="nav-link" to={"/categoria/3"}>Cámaras de video</NavLink>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar