import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

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