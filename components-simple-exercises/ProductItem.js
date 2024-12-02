import React from 'react';
import './ProductItem.css'

const ProductItem = ({product}) =>{
    return(
        <div className='product-item'>
             <img src={product.img} alt={product.name} className="product-image" />
             <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="product-price">{product.price}</p>
             </div>
        </div>
    )
}

export default ProductItem;