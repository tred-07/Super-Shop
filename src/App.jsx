import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Allproducts from './Allproducts/Allproducts'
import Cartcontainer from './Cartcontainer/Cartcontainer'

function App() {
  const [isActive,setIsActive]=useState({cart:true,status:"active"})
  const handleIsActiveState=(status)=>{
    if(status!="cart"){
      console.log("cart",isActive);
      setIsActive({cart:false,status:"inactive"})
    }
    else{
      console.log("about",isActive);
      setIsActive({cart:true,status:"active"})
    }
  }

  const [selectedProducts,setSelectedProducts]=useState([])
  const handleSelectedProduct=(product)=>{
    const newP=[...selectedProducts,product]
    setSelectedProducts(newP)
    console.log(selectedProducts,product);
    
  }
  return (
    <main>
      <div className="flex">
      <Allproducts handleSelectedProduct={handleSelectedProduct}></Allproducts>
      <Cartcontainer handleIsActiveState={handleIsActiveState} isActive={isActive}></Cartcontainer>
      <h1>Selected: {selectedProducts.length}</h1>
      
    </div>c
    </main>
  )
}

export default App
