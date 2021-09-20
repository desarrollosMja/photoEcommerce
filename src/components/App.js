import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import ItemListContainer from "./ItemList/ItemListContainer";
import ItemDetailContainer from "./ItemDetail/ItemDetailContainer";

const App = () => {

    return (
        <>
            <Header/>
            <ItemListContainer/>
            <ItemDetailContainer/>
        </>
    )
}

export default App;