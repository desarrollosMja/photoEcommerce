import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { arrayProductos } from "../../datos";

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const parametros = useParams()

    useEffect(() => {

        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProductos)
            }, 2000)
        })

        promesa.then(res => {
            if (parametros.id == 1){
                res = res.filter(a => a.categoria == "Cámaras fotográficas");
            }

            if (parametros.id == 2){
                res = res.filter(a => a.categoria == "Accesorios");
            }

            if (parametros.id == 3){
                res = res.filter(a => a.categoria == "Cámaras de video");
            }

            setProductos(res)
        })

    }, [parametros])
    
    return (    
       <ItemList items={productos}/>
    )
}

export default ItemListContainer