import {useRef} from 'react'

const UseRefDom = () => {
    const ref = useRef(null);

    const handleClick = () => {
        if(ref.current) {
            ref.current.textContent = "Este texto fue modificado con UseRef"
        }
    }
  return (
    <div>
        <h2>UseRef Dom</h2>
        <p ref={ref}> Este Hook nos permite acceder a elementos del DOM y modificarlos</p>
        <button onClick={ handleClick }> Hace click para modificar el DOM </button>
    </div>
  )
}

export default UseRefDom