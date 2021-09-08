import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav>
            <a href="#index">En grano </a>
            <a href="#index">Molido </a>
            <a href="#index">Torrado </a>
            <CartWidget/>
        </nav>
    )
}

export default NavBar