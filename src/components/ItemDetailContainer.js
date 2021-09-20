import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    useEffect(() => {

        setTimeout(() => {
            fetch("https://api.mercadolibre.com/items?ids=MLA788105757")
            .then(res => res.json())
            .then(json => setProducto(json[0].body))
        }, 2000)

    }, [])

    return (
        <ItemDetail producto={producto}/>
    )
}

export default ItemDetailContainer