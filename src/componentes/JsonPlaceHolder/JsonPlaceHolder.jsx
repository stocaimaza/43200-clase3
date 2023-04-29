import { useState, useEffect } from 'react'

const JsonPlaceHolder = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(respuesta => respuesta.json())
            .then(data => setUsuarios(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h3>Usuarios de JSONPlaceHolder</h3>
            {
                usuarios.map(usuario => {
                    return (
                        <div key={usuario.id}>
                            <p>Nombre: {usuario.name} </p>
                            <p>Email: {usuario.email} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default JsonPlaceHolder