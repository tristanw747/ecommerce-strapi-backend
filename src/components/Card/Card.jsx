import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.scss"

function Card({ item }) {
  return (
    <Link className='link' to={`/product/${item.id}`}>
      <div className='card'>
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img src={ item.attributes?.img?.data?.attributes?.url} alt="" className="mainImg" />
          <img src={ item.attributes?.img2?.data?.attributes?.url} alt="" className="secondImg" />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || Math.floor(item?.attributes.price * 1.2)}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card