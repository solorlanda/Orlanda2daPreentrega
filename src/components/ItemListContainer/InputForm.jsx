import { useState } from "react";

function InputForm() {
    // Definir un estado para guardar el valor del input
    const [inputValue, setInputValue] = useState("");

    // Manejador de cambios cuando el usuario escribe en el input
    const handleChange = (event) => {
        setInputValue(event.target.value); // Actualiza el estado con el valor del input
    };

    // Manejador para enviar el formulario
    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que la página se recargue
        console.log("Input Value:", inputValue); // Muestra el valor ingresado
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Escribe algo:
                <input type="text" value={inputValue} onChange={handleChange} />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default InputForm;
