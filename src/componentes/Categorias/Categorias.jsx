import { useState, useEffect } from "react"

const Categorias = () => {
    const [categoria, setCategoria] = useState("");

    useEffect(() => {
        document.title = `Categoria ${categoria}`;
    }, [categoria])

    const handleClick = (categoria) => {
        setCategoria(categoria);
    }

    return (
        <div>
            <h2>Categoría de Productos </h2>
            <button onClick={() => handleClick("Frutas")}> Frutas </button>
            <button onClick={() => handleClick("Carnes")}> Carnes </button>
            <button onClick={() => handleClick("Lácteos")}> Lácteos </button>
            <button onClick={() => handleClick("Limpieza")}> Limpieza </button>
        </div>
    )
}

export default Categorias