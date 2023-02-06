import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const ProductsView = () => {

    const [products, setProducts] = useState({})
    //Obtener Id
    const { id } = useParams()


    useEffect(() => {
        axios.get(`http://localhost:8080/api/products/view/${id}`)
            .then((result) => {
                console.log("ProductsView", result)
                setProducts(result.data.result)
            })
            .catch((error) => { console.log("Algo salió mal - ProductsView", error) })
    }, [])


    return (
        <div>
            <h2>{products.title}</h2>
            <h3>Price: {products.price}</h3>
            <h3>Description: {products.description}</h3>
        </div>
    )
}

export default ProductsView