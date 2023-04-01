import React ,{useState}from 'react';
import Banner from './Banner.jsx';
import ProductList from './ProductList.jsx';
import {withRouter } from 'react-router-dom';
import FilterBar from './FilterBar.jsx';
function Home(props) {
  const[slideValue,setValue] = useState("1500");
  const[selectValue,setSelectValue] = useState("null");
  function handleSlideValue(val){
    setValue(val);
  }
  function handleSelectValue(val){
    setSelectValue(val);
  }
  return (
    <>
    <Banner></Banner>
    <div className="product_body">
    <FilterBar slideValue={slideValue} selectValue={selectValue} handleSelectValue={handleSelectValue} handleSlideValue={handleSlideValue}></FilterBar>
    <ProductList slideValue={slideValue} selectValue={selectValue} value = {props.value} handleInput = {props.handleInput} handleSlideValue={handleSlideValue} handleSelectValue={handleSelectValue}></ProductList>
    </div>
    </> 
  )
}

export default withRouter(Home)