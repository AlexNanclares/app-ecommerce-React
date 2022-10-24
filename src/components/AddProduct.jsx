import React from 'react'

const AddProduct = ({ handlerProduct, product }) => {
  
  const { agregado } = product;

  return agregado ? <button className='general-button' disabled>In Shopping Cart</button> 
  : <button className='general-button' onClick={() => handlerProduct(product)}>Add To Card</button>

}

export default AddProduct