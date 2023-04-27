import React from 'react'
import './Cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
function Cart() {
  const products = useSelector(state => state.cart.products)
  const dispatch = useDispatch()

  function total() {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price))
    return total.toFixed(2);
  }

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products?.map(item => (
        <div className="item" key={item.id}>

          <Link className='link' to={`/product/${item.id}`}>
            <img src={item.img} alt="" />
          </Link>

          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">{item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlineIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${total()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart