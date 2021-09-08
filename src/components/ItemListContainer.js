import Alert from "react-bootstrap/Alert"

const ItemListContainer = (props) => {
    return (    
        <Alert variant="primary">
            {props.saludo}
        </Alert>       
    )
}

export default ItemListContainer