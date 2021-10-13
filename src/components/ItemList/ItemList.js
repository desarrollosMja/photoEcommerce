import Item from "./Item";

const ItemList = (props) => {
    
    let {items} = props

    items = items.sort(function(a,b){
        if (!a.destacado && b.destacado) return 1
        if (a.destacado && !b.destado) return -1
        if ((a.destacado && b.destacado) || (!a.destacado && !b.destacado)) return 0
    })
    
    return (
        <div id="contenedorItems">
            {items.map(item => <div key={item.id}><Item item={item}/></div>)}
        </div>
    )
}

export default ItemList