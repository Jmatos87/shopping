import React, { useState } from 'react';
import bigAssTV from '../../assets/big-ass-tv.jpg'
import ps5 from '../../assets/ps5.jpeg'
import coolTV from '../../assets/cooooool.jpg'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../../actions/cart'
import './Products.css'

const sampleProducts = [
    {
        name: 'Big ass TV',
        description: 'Curved OLED 4K 3D super awesome wow!',
        price: 750,
        image: bigAssTV

    },
    {
        name: 'Impossibly Large TV',
        description: 'Nathans obsession!',
        price: 5550,
        image: coolTV
    },
    {
        name: 'PS5',
        description: 'Winner of the console meme wars!',
        price: 600,
        image: ps5
    }
]

export default function Products() {
  // Declare a new state variable, which we'll call "count"
  const dispatch = useDispatch()

  return (
    <div className='col-lg-8 products-container'>
        <h2>Products</h2>
        {sampleProducts.map((product, i) =>{
            const { description, image, name, price  } = product
            return (
            <div className='row product' key={i}>
                <div className='col-lg-3'>
                    <img src={image} className='w-100 image' />
                </div>
                <div className='col-lg-6'>
                    <p>{name}</p>
                    <p>{description}</p>
                </div>
                <div className='col-lg-3'>
                    <p>${price}</p>
                    <button className='btn btn-success' onClick={()=>{ dispatch(addProductToCart(product))}}>Buy Me</button>
                </div>               
            </div>)
        })}
    </div>
  );
}