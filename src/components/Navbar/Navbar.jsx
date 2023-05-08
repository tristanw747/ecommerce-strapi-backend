import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';


function Navbar() {
const [open,setOpen]= useState(false)
const products = useSelector(state => state.cart.products)

function cartCount() {
  let total= 0
  products.map(e=>total+=e.quantity)
  return total
}

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/flag1.png" className="flag-icon" alt="flag icon" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item"><span>USD</span>
            <KeyboardArrowDownIcon /></div>

          <div className="item">
            <Link to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link to="/products/3">Children</Link>
          </div>
        </div>






        <div className="center">
          <Link to="/">EASTHEALTH</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link to="/">About</Link>
          </div>
          <div className="item">
            <Link to="/">Contact</Link>
          </div>
          <div className="item">
            <Link to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartIcon />
              <span>{cartCount()}</span>
            </div>
          </div>


        </div>
      </div>
    {open && <Cart/>}
    </div>
  )
}

export default Navbar