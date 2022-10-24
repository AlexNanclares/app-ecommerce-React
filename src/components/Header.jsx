import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';

const Header = ({ shopping }) => {
  return (
    <header>
        <button className='general-button shopping-button'>
            <FaShoppingCart className='margin-items' />
            <span className='margin-items'>
                { shopping.length }
            </span>
              Products
        </button>
    </header>
  )
}

export default Header