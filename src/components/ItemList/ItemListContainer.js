import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const arrayProductos = [
    {id: 0,name: "Cámara Canon 70D",description: "Cámara de fotos semi-profesional",price: 1500, stock: 10,pictureUrl: "https://www.canon.es/media/FRT%20VARI%20ANGLE%20MON%20w%20EF-S%2018-135mm%20IS%20STM_pack_tcm86-1064827.jpg"},
    {id: 1,name: "Tripode Manfroto 055",description: "Tripode para cámaras reflex",price: 745, stock: 4,pictureUrl: "https://storage.googleapis.com/tecnowestune/2019/12/3923d60a-002.jpg"}
]

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])

    useEffect(() => {

        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProductos)
            }, 2000)
        })

        promesa.then(res => {
            console.log(res)
            setProductos(res)
        })

    }, [])
    
    return (    
       <ItemList items={productos}/>
    )
}

export default ItemListContainer