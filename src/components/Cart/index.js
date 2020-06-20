import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { removeProductFromCart } from '../../actions/cart'
import './Cart.css'

export default function Cart() {
  // Declare a new state variable, which we'll call "count"
  const cartState = useSelector(state => state.cart)
  const { shoppingCartList, total } = cartState
  const dispatch = useDispatch()
  return (
    <div className='col-lg-4 cart-container'>
        <h2>Carts</h2>
        {shoppingCartList.map((product, i) => {
          const { description, image, name, price } = product
          return (
            <div className='row product' key={i}>
              <div className='col-lg-8'>
                <div className='row'>{name}</div>
                <div className='row'>${price}</div>
              </div>
              <div className='col-lg-4'>
                <button className='btn btn-danger remove' onClick={()=>{ dispatch(removeProductFromCart(product))}} >Remove</button>
              </div>
              
              
            </div>     
          )
        })}

      <h1>Damn you ballin!!!! ${total}</h1>
    </div>
  );
}