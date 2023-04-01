import React, { useEffect,useState,useContext} from 'react'
import { withRouter } from 'react-router-dom';
import "./Styling/ProductCard.css";
import Carousel from './Carousel';
import CartItems from '../Utils/CartItems';

function ProductCard(props) {
const[productData,setproductData] = useState("");
const {items,setItems} = useContext(CartItems);
const id = props.match.params.id;
 useEffect(function(){
    props.handleInput("");
    async function fetchData(){
        let response = await fetch("https://dummyjson.com/products/"+id);
        let data = await response.json();
        setproductData(data);
    }
    fetchData();
 },[]);
 return (
    <div className="prod_cont">
        <div className='prod_title'>
            {productData?.title}
        </div>
        <div className='prod_info'>
            <div className="prod_poster">
                {productData==""?<div className='shimmer'></div>:<Carousel images={productData.images}></Carousel>}
            </div>
            <div className='prod_extras'>
               <div className='prod_data'>
                <div className="prod_detail">{productData.title}</div>
                <div className="prod_detail">{"Rating  : "+productData.rating+" 🌟"}</div>
                <div className="prod_detail prod_price">{"Price : $"+productData.price}</div>
                <div className="prod_detail">{"Hurry only "+productData.stock+" left"}</div>
                <div className="prod_detail">{"Description:  "+productData.description}</div>
               </div>
               <div className="buy">
               <button className="addtoCart" onClick={()=>{
                 let arr  = items;
                 arr.push(productData);
                 setItems([...arr]);
                 arr = JSON.stringify(arr);
                 localStorage.setItem("cart", arr);
               }}> Add to Cart</button>
               </div>
               
            </div>
            
        </div>

    </div>
   )
}

export default withRouter(ProductCard);