import React, { useState } from "react";
import ProductItem from "./ProductItem";
import './ShoppingCart.css';

const ShoppingCart = () =>{
    const [cartItems, setCartItems] = useState([
        {id: 1, name: 'Product 1', price: 10},
        {id: 2, name: 'Product 2', price: 20},
        {id: 3, name: 'Product 3', price: 30},
        {id: 4, name: 'Product 4', price: 40},
        {id: 5, name: 'Product 5', price: 50},
    ]);

    const [totalPrice, setTotalPrice] = useState(0);

    const handleAddToCart = (product) =>{
        setCartItems((prevItems) => [...prevItems, product]);
        updateTotalPrice();
    };
    const handleRemoveFromCart = (productID) =>{
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productID));
        updateTotalPrice();
    };
    const updateTotalPrice = () =>{
        const total = cartItems.reduce((total, item) => total + item.price, 0);
        setTotalPrice(total);
    };

    return(
        <div className="shopping-cart">
            <h2>
                Shopping Cart
            </h2>
            <div className="cart-items">
                {cartItems.map((item) =>(
                    <ProductItem key={item.id} product={item} onRemove={handleRemoveFromCart}/>
                ))}
            </div>
            <p>Total: ${totalPrice}</p>
        </div>
    );
};

export default ShoppingCart;