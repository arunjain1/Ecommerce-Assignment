import React from 'react'
import "./Styling/FilterBar.css";
function FilterBar(props) {
  return (
    <div className="FilterBar">
        <div className="categoryList">
            <div className="categories">Categories</div>
            <select className='select' onChange={(e)=>{
                props.handleSelectValue(e.target.value);
            }}>
            <option value="null">All</option>
            <option value="smartphones">SmartPhones</option>
            <option value="laptops">Laptop</option>
            <option value="womens-dresses">LifeStyle</option>
            </select>
        </div>
        <div className="priceFilter">
            <div className="price">Price</div>
            <input type='range' min="1" max="2000" value={props.slideValue} onChange={(e)=>{
                props.handleSlideValue(e.target.value);
            }}></input>  
        </div>
    </div>
  )
}

export default FilterBar