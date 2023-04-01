import React from 'react'
import NoResultImg from '../asset/2953962.jpg';
import "./Styling/ProductList.css";
import {Link} from "react-router-dom";
import Shimmer from './Shimmer';
function ProductList(props){
  let [products,setProducts] = React.useState([]);
  let[searchProducts,setSearchProducts] = React.useState([]);
  let[priceFiltered,setpriceFiltered] = React.useState([]);
    React.useEffect(function(){
      if(props.value===""){
        setSearchProducts(products);
        return;
      }
      async function fetchData(){
        let response = await fetch("https://dummyjson.com/products/search?q="+props.value);
        let data = await response.json();
        let products = data.products;
        if(searchProducts.length!=0){
         setSearchProducts(products);
        }
      }
      fetchData();
    },[props.value])

    React.useEffect(function(){
      props.handleInput("");
      setProducts("");
      async function fetchData(){
      let response = await fetch("https://dummyjson.com/products?&limit=20");
      let data = await response.json();
      let product = data.products;
      setSearchProducts(product);
      setProducts(product);
    }
     fetchData();
    },[]);
    
    React.useEffect(function(){
      props.handleInput("");
      async function fetchData(){
      let response;
      if(props.selectValue=="null"){
        response = await fetch("https://dummyjson.com/products?&limit=20");
      }
      else{
        response = await fetch("https://dummyjson.com/products/category/"+props.selectValue);
      }
      let data = await response.json();
      let products = data.products;
      setSearchProducts(products);
      setpriceFiltered(products);
      props.handleSlideValue(2000);
    }
     fetchData();
    },[props.selectValue]);
    React.useEffect(function(){
       searchProducts = priceFiltered.filter((itemObj)=>{
          return Number(itemObj.price)<=Number(props.slideValue);
       })
       setSearchProducts([...searchProducts]);
    },[props.slideValue])

  return(
    <div className='productlist'>
      
      {
        products.length===0?<Shimmer></Shimmer>
        :<>
          <div className='trending_box'>
            {searchProducts.length==0?
            <img className = "nodata" alt="Not Data Found" src = {NoResultImg}/>
            :searchProducts[0]==="empty"?<Shimmer></Shimmer> :searchProducts.map(function(prodObj,idx){
        
                return(
                  
                  <div key ={prodObj.id} id={prodObj.id} className="poster_box">
                   <div className='posterheading'>
                    <h5 className='product_detail'>{prodObj.title}</h5>
                    <h5 className='product_detail'>{prodObj.rating}⭐</h5>
                    <h5 className='product_detail'>${prodObj.price}</h5>
                   </div>
                   <Link to={"/product/"+prodObj.id} key = {prodObj.id}>
                   <img className="poster_img" alt ="Poster" src={prodObj.thumbnail}></img>
                   </Link>
                  </div>
                  
                )
           
            })}
          </div>
        </>
      }
    </div>
  );
  }
export default ProductList