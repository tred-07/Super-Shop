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
  return (
    <main>
      <div className="flex">
      <Allproducts></Allproducts>
      <Cartcontainer handleIsActiveState={handleIsActiveState} isActive={isActive}></Cartcontainer>
      
    </div>
    </main>
  )
}

export default App
