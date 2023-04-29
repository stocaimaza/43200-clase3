import {useRef} from 'react';
//UseRef es un hook qu e me permite crear una referencia mutable que puede ser actualizada sin provocar una nueva renderización del componente. 

//"Referencia mutable" significa que puedo cambiar el valor de un objeto sin que se vuelva a renderizar. 

//Ej. Cantidad de productos en un carrito de compras. 

const UseRef = () => {
    const contadorCarrito = useRef(0);
    //Este hook retorna un objeto con una propiedad llamada "current" la cual modemos mutar. 

    function agregarAlCarrito() {
        contadorCarrito.current = contadorCarrito.current + 1;
        console.log(contadorCarrito.current);
    }

  return (
    <div>
        <h2>Productos Marolio en el carrito: {contadorCarrito.current}  </h2>
        <button onClick={agregarAlCarrito}> Agregar al Carrito </button>

    </div>
  )
}

export default UseRef