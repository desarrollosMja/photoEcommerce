import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <a href="#index">En grano </a>
                <a href="#index">Molido </a>
                <a href="#index">Torrado </a>
            </Container>
        </Navbar>
    )
}

export default NavBar