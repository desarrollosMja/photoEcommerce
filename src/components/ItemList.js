import Item from "./Item";

const ItemList = (props) => {
    
    const {items} = props
    
    return (
        <>
            {items.map(item => <div key={item.id}><Item item={item}/></div>)}
        </>
    )
}

export default ItemList