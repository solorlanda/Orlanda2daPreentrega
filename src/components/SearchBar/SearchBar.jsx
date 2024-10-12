import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearchHeart } from "react-icons/bs";

function SearchBar() {
    const [inputValue, setInputValue] = useState("");
    const [submittedValue, setSubmittedValue] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedValue(inputValue);
        setInputValue("");
        if(inputValue){
            navigate(`/search/${inputValue}`)
        }
        else{
            navigate(`/`)
        }
        
    }
    return(
        <div className="w-[65%]">
            <form onSubmit={handleSubmit} className="flex grow justify-center items-center">
                <input className="h-6 w-[70%] rounded-lg p-2 m-2 text-center" value={inputValue} onChange={handleChange} type="text" placeholder="Busque su producto aquí..."/>
                <button onSubmit={handleSubmit}>
                    <BsSearchHeart className="size-6"/>
                </button>
            </form>
        </div>
    )
}
export default SearchBar