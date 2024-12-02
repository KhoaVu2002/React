import React from 'react';
import ProductItem from './ProductItem.js'
import './ProductItem.css'

const ProductList = ({products}) =>{
    return(
        <div className='product-list'>
            {products.map((product, index) =>(
                <ProductItem key={index} product={product}/>
            ))}
        </div>
    )
}

export default ProductList;