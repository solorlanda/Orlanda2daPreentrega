import Item from "./Item";
import searchNotFound from "../../assets/searchNotFound.png";
const ItemList = ({products, searchInput}) => {
    return(
        <div className="grid grid-cols-3 gap-3 justify-center justify-items-center">
            {
                products.length === 0 ? (
                    <div>
                        <h3 className="font-letraTitulos m-3">Lo sentimos. No pudimos encontrar ningun producto para la busqueda: "{searchInput}"</h3>
                        <img src={searchNotFound} alt="" />
                    </div>
                ) :
                (products.map((product)=>{
                    return <Item key={product.id} product={product}/>
                })
            )}
        </div>
    )
}
export default ItemList