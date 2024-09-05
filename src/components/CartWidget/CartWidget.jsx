
import { BsCart4 } from "react-icons/bs";

function CartWidget() {
    return(
    <div className="relative p-2.5">
        <button>
        <BsCart4 size="40px"/>
        <span className="absolute top-0 right-0 bg-celesteArgentina text-[16px] px-2 rounded-full border-solid border border-white">5</span>
        </button>
    </div>
    )
}

export default CartWidget