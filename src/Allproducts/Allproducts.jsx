import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Allproducts = ({handleSelectedProduct}) => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>{
        setProducts(data)
    })
    },[])
    return (
        <div>
            <h1>Allproducts</h1>
            <div>{products.map(product=><Product key={product.id} product={product} handleSelectedProduct={handleSelectedProduct}></Product>)}</div>
        </div>
    );
};

export default Allproducts;