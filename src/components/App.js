import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/main.css"
import NavBar from './Header/NavBar';
import ItemListContainer from "./ItemList/ItemListContainer";
import ItemDetailContainer from "./ItemDetail/ItemDetailContainer";
import Cart from "./Cart/Cart"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProviderCarrito } from './Context/CartContext';

const App = () => {

    return (
        <BrowserRouter>
            <ProviderCarrito>
                <NavBar/>
                <Switch>
                    <Route path="/" component={ItemListContainer} exact/>
                    <Route path="/categoria/:id" component={ItemListContainer}/>
                    <Route path="/item/:id" component={ItemDetailContainer}/>
                    <Route path="/cart" component={Cart}/>
                </Switch>
            </ProviderCarrito>
        </BrowserRouter>
    )
}

export default App;