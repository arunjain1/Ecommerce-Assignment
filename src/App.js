
import Shop from "./Component/Shop";
import Footer from "./Component/Footer";
import React, { useState,useEffect } from "react";
import Header from "./Component/Header";
import CartItems from "./Utils/CartItems";
function App() {
  let [inputvalue,setInputValue] = useState("");
  let prevArr =localStorage.getItem("cart") || "[]"
  prevArr = JSON.parse(prevArr);
  let [items, setItems] = useState(prevArr);
  const handleInput = (val) => {
    setInputValue(val);
  };
  
  return (
    <CartItems.Provider value={{items:items,
     setItems:setItems,}}>
    <Header handleInput = {handleInput} inVal = {inputvalue} ></Header>
    <Shop handleInput = {handleInput} value = {inputvalue}></Shop>
    <Footer></Footer>
    </CartItems.Provider>
    
  );
}

export default App;
