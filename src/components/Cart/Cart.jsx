import React from 'react'
import './Cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
function Cart() {
  const data = [
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "coat",
      desc:"ijasiojiosd sasd",
      isNew: true,
      oldPrice: 19,
      price: 12,

    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "skirt",
      desc:"ijasiojiosd sasd",
      oldPrice: 19,
      price: 12,

    }
  ]
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data?.map(item => (
        <div className="item" key={item.id}>
           <Link className='link' to={`/product/${item.id}`}>
           <img src={item.img} alt="" />
           </Link>
          
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              1 x ${item.price}
            </div>
          </div>
          <DeleteOutlineIcon className='delete' />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$128</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart