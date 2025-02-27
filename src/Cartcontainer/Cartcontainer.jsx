import React from 'react';
import App from '../App';
import Cart from '../Cart/Cart';
import About from '../About/About';
const Cartcontainer = ({handleIsActiveState,isActive}) => {
    console.log("active",isActive);
    return (
        <div>
            <h1>Cartcontainer</h1>
            <div className="flex">
            <div className={`${isActive.cart?"border blue font":"border font"}`} onClick={()=>handleIsActiveState("cart")}>CART</div>
            <div className={`${isActive.cart?"border font":"border font blue"}`} onClick={()=>handleIsActiveState("about")}>About</div>
            </div>

            
            {isActive.cart? <Cart></Cart>:<About></About>}
            

        </div>
    );
};

export default Cartcontainer;