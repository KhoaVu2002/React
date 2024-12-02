import React from 'react';
 
const ProductItem = ({ product, onRemove }) => {
  return (
    <div className="product-item">
      <p>{product.name} - ${product.price}</p>
      <button onClick={() => onRemove(product.id)}>Delete</button>
    </div>
  );
};
 
export default ProductItem;