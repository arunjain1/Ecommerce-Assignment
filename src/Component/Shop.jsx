import React from 'react'
import Home from './Home.jsx'
import PageNotFound from './PageNotFound.jsx'
import ProductCard from './ProductCard.jsx'
import "./Styling/Shop.css"
import { Route, Redirect,Switch } from "react-router-dom";
import Cart from './Cart.jsx'
function Shop(props) {
  return (
    <div className='movie_body'>
    <Switch>
      <Route path="/home" exact><Home value ={props.value} handleInput = {props.handleInput}></Home></Route>
      <Route path ="/product/:id"><ProductCard handleInput = {props.handleInput}></ProductCard></Route>
      <Route path ="/cart"><Cart></Cart></Route>
      <Redirect from ="/" to="/home" exact></Redirect>
      <Route><PageNotFound handleInput = {props.handleInput}></PageNotFound></Route>
    </Switch>
    </div>
  )
}

export default Shop
