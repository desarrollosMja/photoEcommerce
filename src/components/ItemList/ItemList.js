import Item from "./Item";

const ItemList = (props) => {
    
    let {items} = props
    
    return (
        <>
            <div id="contenedorItemsDestacados">
                {items.map(item => {
                    if (item.destacado == true){
                        return <div key={item.id}><Item item={item}/></div>
                    }
                })}
            </div>

            <div id="contenedorItems">
            {items.map(item => {
                if (item.destacado == false){
                    return <div key={item.id}><Item item={item}/></div>
                }
            })}
            </div>
        </>
    )
}

export default ItemList