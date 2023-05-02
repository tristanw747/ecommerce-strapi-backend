import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
        <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus qui aperiam magnam excepturi quos eaque, omnis molestiae, consectetur minus hic repellat! Qui perferendis exercitationem enim adipisci! Unde consequuntur quasi quisquam.</span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus qui aperiam magnam excepturi quos eaque, omnis molestiae, consectetur minus hic repellat! Qui perferendis exercitationem enim adipisci! Unde consequuntur quasi quisquam.</span>
        
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">AMBERGLACE</span>
          <span className="copyright">
          &#169;	Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment-options.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer