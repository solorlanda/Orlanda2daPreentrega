import Item from "./Item";

const ItemList = ({products}) => {
    return(
        <div className="grid grid-cols-3 gap-3 justify-center justify-items-center">
            {
                products.map((product)=>{
                    return <Item key={product.id} product={product}/>
                })
            }
        </div>
    )
}
export default ItemList