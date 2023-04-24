import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card'
function FeaturedProducts({ type }) {

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "long sleeve graphic",
      isNew: true,
      oldPrice: 19,
      price: 12,

    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "coat",
      isNew: true,
      oldPrice: 19,
      price: 12,

    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "skirt",
      oldPrice: 19,
      price: 12,

    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/3961150/pexels-photo-3961150.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "hat",
      oldPrice: 19,
      price: 12,

    },
  ]


  return (
    <div className='featuredProducts' >
      <div className="top">
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat similique eveniet, id aperiam illum ullam, quia illo rem quibusdam vero deserunt quae. Ex, voluptatum? Unde facere architecto odio cupiditate iste.</p>
      </div>
      <div className="bottom">
        {data.map(item=>(
          <Card item={item} key={item.id} />
        ))}
      </div>

    </div>
  )
}

export default FeaturedProducts