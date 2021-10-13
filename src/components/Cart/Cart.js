import { contextoCarrito } from '../Context/CartContext'
import { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { firestore } from "../../firebase";
import "./cart.css"
import Button from 'react-bootstrap/Button'
import Modal from "react-bootstrap/Modal"
import Spinner from 'react-bootstrap/esm/Spinner';
import ItemCountCart from './ItemCountCart'

const Cart = () => {
    
    const [smShow, setSmShow] = useState(false);
    
    const [formShow, setFormShow] = useState(false);
    const handleClose = () => setFormShow(false);
    const handleShow = () => setFormShow(true);

    const [ordenId, setOrdenId] = useState()

    const carrito = useContext(contextoCarrito)

    let montoTotal = 0

    function crearNuevaOrden(nombre, telefono, email){
        const db = firestore
        const coleccion = db.collection("ordenes")

        const nuevaOrden = {
            buyer: {
                name: nombre,
                phone: telefono,
                email: email
            },
            items: carrito.arrayProductos,
            date: firestore.Timestamp.now(),
            total: montoTotal
        }

        const consulta = coleccion.add(nuevaOrden)
        consulta.then(res => {
            setOrdenId(res.id)
            document.getElementById("spinnerModal").style.display = "none"
        })

        carrito.clearCart()
        document.getElementById("siHayElementos").style.display = "none"
        document.getElementById("siNoHayElementos").style.display = "block" 
    }

    for (const producto of carrito.arrayProductos) {
        if (producto.cantidadComprada != 0){
            montoTotal += producto.cantidadComprada * producto.price
        }
    }
    
    useEffect(() => {
        if (carrito.arrayProductos.length != 0){
            document.getElementById("siHayElementos").style.display = "flex"
            document.getElementById("siNoHayElementos").style.display = "none"
        }
    }, [])

    return (
        <div id="carritoContainer">
            <h1 id="siNoHayElementos">No hay productos agregados al carrito. <Link to="/">Volver a HOME</Link></h1>
            {carrito.arrayProductos.map((element, index) => <div id="itemCarrito" key={element.id}>
                <h5>{element.title} - $ {element.price}</h5>
                <ItemCountCart cantidadAgregada={element.cantidadComprada} indice={index}/>
                <Button variant="danger" id="btnQuitarCarrito" onClick={() => {
                        if (carrito.arrayProductos.length == 1){
                            document.getElementById("siHayElementos").style.display = "none"
                            document.getElementById("siNoHayElementos").style.display = "block"
                        }
                        carrito.removeItem(element.id)
                    }}>
                    X
                </Button>
            </div>)}
            <hr/>
            <div id="siHayElementos">
                <h2>TOTAL: ${montoTotal}</h2>
                <Button variant="danger" id="btnVaciarCarrito" onClick={() => {
                        carrito.clearCart()
                        document.getElementById("siHayElementos").style.display = "none"
                        document.getElementById("siNoHayElementos").style.display = "block" 
                    }}>
                    Vaciar carrito
                </Button>
                <Button variant="ok" id="btnTerminarCompra" onClick={() => {
                        setFormShow(true)
                    }}>
                    Terminar compra
                </Button>

{/* MODAL PARA INGRESO DE DATOS DEL USUARIO */}
                <Modal
                    size="sm"
                    show={formShow}
                    onHide={() => setFormShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            Ingrese sus datos
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="modalFormularioCuerpo">
                        <form id="formularioCompra">
                            <input type="text" placeholder="Nombre" id="inputNombre"></input>
                            <input type="phone" placeholder="Teléfono" id="inputTelefono"></input>
                            <input type="email" placeholder="E-mail" id="inputEmail"></input>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={() => {
                                handleClose()
                                crearNuevaOrden(document.getElementById("inputNombre").value, document.getElementById("inputTelefono").value, document.getElementById("inputEmail").value)
                                setSmShow(true)
                            }}>
                            Confirmar compra
                        </Button>
                    </Modal.Footer>
                </Modal>

{/* MODAL DE COMPRA CONFIRMADA */}
                <Modal
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            ¡Compra confirmada!
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Comprobante N°: {ordenId}
                        <br/><Spinner id="spinnerModal" animation="grow" />
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default Cart