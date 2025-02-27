import React, { useState } from 'react';

const Product = ({product,handleSelectedProduct}) => {
    const {id,title,author,posted_date,reading_time}=product
    // console.log(handleSelectedProduct);
    return (
        <div className='border'>
            <h1>Product id:{id}</h1>
            <h1>{title}</h1>
            <h3>Author: {author}</h3>
            <h3>Posted time: {posted_date}</h3>
            <h3>Reading time: {reading_time}</h3>
            <button className="border" onClick={()=>handleSelectedProduct(product)}>Add to bookmark</button>
        </div>
    );
};

export default Product;