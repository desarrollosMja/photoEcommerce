import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import ItemListContainer from "./ItemListContainer";
import NavBar from "./NavBar"

const App = () => {

    return (
        <>
            <header>
                <NavBar/>
            </header>
            <ItemListContainer saludo="Bienvenidos a mi E-Commerce"/>
            <ItemCount stock={5} initial={1} onAdd={() => {}}/>
        </>
    )
}

export default App;