import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/actions/productActions'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

const ProductListing = () => {
  const products = useSelector((state)=> state)
    const dispatch = useDispatch()
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch(err => console.log(err))
        dispatch(setProducts(response.data))
        // console.log(response)
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    console.log("Products:", products) 

    return (
        <div className='ui grid container'>
            <ProductComponent /> 
        </div>
    )
}

export default ProductListing;