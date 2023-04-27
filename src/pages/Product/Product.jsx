import React from 'react'
import "./Product.scss"
import { useState } from 'react'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from '../../hooks/useFetch';
function Product() {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  // const { data } = useFetch('https://postgresql-strapi.onrender.com/api/products?populate=*')

  // const images = data?.map(e => e.attributes.image.data.attributes.url)
  const images = [
    "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ]

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          {images && <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />}
          {images && <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />}
        </div>
        <div className="mainImg">
          {images && <img src={images[selectedImg]} alt="" />}
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt laboriosam nulla beatae ullam commodi minima earum, molestiae in, voluptatum quam at quo aliquam aspernatur veniam pariatur iste ratione repellendus!
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => (prev <= 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product