import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Spinner from 'react-bootstrap/Spinner';
import { firestore } from "../../firebase";

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const parametros = useParams()

    // useEffect(() => {

    //     const promesa = new Promise((resolve, reject) => {
    //         document.getElementById("spinner").style.display = "block"
    //         setTimeout(() => {
    //             resolve(arrayProductos)
    //             document.getElementById("spinner").style.display = "none"
    //         }, 2000)
    //     })

    //     promesa.then(res => {
    //         if (parametros.id == 1){
    //             res = res.filter(a => a.categoria == "Cámaras fotográficas");
    //         }

    //         if (parametros.id == 2){
    //             res = res.filter(a => a.categoria == "Accesorios");
    //         }

    //         if (parametros.id == 3){
    //             res = res.filter(a => a.categoria == "Cámaras de video");
    //         }

    //         setProductos(res)
    //     })

    // }, [parametros])

    useEffect(() => {
        //Referencia de la base de datos
        const db = firestore

        //obtener colección de productos
        const coleccion = db.collection("productos")

        //consulta --> es una promesa
        const consulta = coleccion.get()
        consulta
            .then(res => {
                const documento = res.docs
                let auxiliarProductos = []

                documento.forEach(producto => {
                    const consultaFinal = {
                        id: producto.id,
                        ...producto.data()
                    }
                    auxiliarProductos.push(consultaFinal)
                })

                if (parametros.id == 1){
                    auxiliarProductos = auxiliarProductos.filter(a => a.categoryId == 1);
                }
        
                if (parametros.id == 2){
                    auxiliarProductos = auxiliarProductos.filter(a => a.categoryId == 2);
                }
    
                if (parametros.id == 3){
                    auxiliarProductos = auxiliarProductos.filter(a => a.categoryId == 3);
                }

                setProductos(auxiliarProductos)
                document.getElementById("spinner").style.display = "none"
            })
            .catch(err => console.log(err))
    }, [parametros])
    
    return (    
        <>
            <Spinner id="spinner" animation="grow" />
            <ItemList items={productos}/>
        </>
    )
}

export default ItemListContainer