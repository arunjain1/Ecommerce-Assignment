import React, { useState,useEffect,useContext} from 'react'
import "./Styling/Header.css";
import logoImg from "../asset/woocommerce.png";
import cartImg from "../asset/cart.png"
import { Link } from "react-router-dom";
import CartItems from '../Utils/CartItems';
function Header(props){
let [value,setValue] = useState("");
let {items} = useContext(CartItems);
function changeValue(e){
    setValue(e.target.value);
    props.handleInput(e.target.value);
}
useEffect(function(){
  if(props.inVal!=value){
    setValue(props.inVal);
  }
},[props.inVal]);
return (
 <div className="header">
 <div className='flex'>
 <Link to ="/home"><div className="logo"><img alt="logo" src = {logoImg}></img></div></Link>
 <input type="text" className='search' value ={value} placeholder = "🔍 Search For Products" onChange={changeValue}/>
 <Link to="/cart"><div className='cart'>
   <img alt='cart' src = {cartImg}></img>
   <div className="cartCount">{items.length}</div>
  </div>
 </Link> 
 </div>
 </div>
    );
}

export default Header