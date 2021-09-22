import ItemCount from "../ItemList/ItemCount"

const ItemDetail = (props) => {

    const {id, name, categoria, description, price, stock, pictureUrl} = props.producto

    return (
        <div id="itemDetailDiv">
            <h1>{name}</h1>
            <h6>{categoria}</h6>
            <hr/>
            <img src={pictureUrl}></img>
            <p>{description}</p>
            <h3>Precio: $ {price}</h3>
            <h4>Unidades disponibles: {stock}</h4>
        </div>
    )
}

export default ItemDetail