import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./ItemListContainer";
import NavBar from "./NavBar"

const App = () => {
    return (
        <>
            <header>
                <h1>La cafetería de Jose</h1>
                <NavBar/>
            </header>
            <ItemListContainer saludo="Bienvenidos a mi E-Commerce"/>
        </>
    )
}

export default App;