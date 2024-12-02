import React from 'react';


const ProductCard = ({product}) =>{
    return(
        <div className='product-card'>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default ProductCard;