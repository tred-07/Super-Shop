import React, { useState } from 'react';
import Product from '../Product/Product';

const Allproducts = () => {
    const [products,setProducts]=useState([])
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>setProducts(data))
    return (
        <div>
            <h1>Allproducts</h1>
            <div>{products.map(product=><Product key={product.id} product={product}></Product>)}</div>
        </div>
    );
};

export default Allproducts;