import { useState, useEffect } from 'react'
import { getProductos } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos()
            .then(res => setProductos(res))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h2>Productos</h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer