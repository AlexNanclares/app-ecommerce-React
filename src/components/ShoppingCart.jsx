import React from 'react'
import ItemShopping from './ItemShopping'

const ShoppingCart = ({ shopping, setShopping }) => {
  
  return (
    <div className='container-shopping'>
        <h2>Shopping Cart</h2>
        <hr />
        {
          shopping.map((itemShopping) =>(
            <ItemShopping 
                key={itemShopping.id}
                itemShopping={itemShopping}
                setShopping={setShopping}
                shopping={shopping}
            />
          ))
        }
    </div>
  )
}

export default ShoppingCart