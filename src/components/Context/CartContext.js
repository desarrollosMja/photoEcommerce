import { Children, createContext, useState } from "react";

export const contextoCarrito = createContext()

const {Provider} = contextoCarrito

export const ProviderCarrito = ({children}) => {
    
    const [arrayProductos, setArrayProductos] = useState([])
    const [contador, setContador] = useState(0)

    let arrayAuxiliar = []

    const addItem = (item, quantity) => {
        if (isInCart(item.id)){
            for (const producto of arrayProductos) {
                if (producto.id == item.id) producto.cantidadComprada += quantity
            }
        } else {
            arrayAuxiliar = arrayProductos
            arrayAuxiliar.push(item)
            setArrayProductos(arrayAuxiliar)
        }
        setContador(quantity)
        //console.log(arrayProductos)
    }

    const removeItem = itemId => {
        arrayProductos.forEach((elemento, indice, array) => {
            console.log(elemento)
            console.log(itemId)
            if (elemento.id == itemId) {
                console.log(elemento)
                setContador(contador - elemento.cantidadComprada)
                arrayProductos.splice(indice,1)
            }
        })
        // console.log(arrayProductos)
        // console.log(contador)
    }

    const clearCart = () => {
        setArrayProductos([])
        setContador(0)
        console.log(arrayProductos)
        console.log(contador)
    }

    const isInCart = itemId => {
        if (arrayProductos.find(elemento => elemento.id == itemId)) return true;
        else return false
    }

    const valorDelContexto = {
        arrayProductos: arrayProductos,
        addItem: addItem,
        removeItem: removeItem,
        clearCart: clearCart
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )

}

