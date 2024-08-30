/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Cart = ({cart}) => {
  return (
    <div className='border border-black p-5 grid grid-cols-6'>
        <div className="col-span-1 ">
            <img src={cart.product.image} className='h-16' alt="" />
        </div>
        <div className="col-span-3 ">
            <p className='mb-2'>{cart.product.title}</p>
            <p className='text-gray-500'>Price ( $ {cart.product.price} )</p>
        </div>
        <div className="col-span-1 ">
            <p>Quantity</p>
            <div className=" flex items-center gap-2 mt-2">
                <button className='bg-black border border-black px-2 py-0.5 text-white'>-</button>
                <span>{cart.quantity}</span>
                <button className='bg-black border border-black px-2 py-0.5 text-white'>+</button>
            </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center">
            <p className='text-end text-xl font-bold'>$ {cart.cost}</p>
        </div>
    </div>
  )
}

export default Cart