import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import ItemCount from './ItemCount';
import ItemListContainer from "./ItemListContainer";

const App = () => {

    return (
        <>
            <Header/>
            <ItemListContainer/>
            <ItemCount stock={5} initial={1} onAdd={() => {}}/>
        </>
    )
}

export default App;