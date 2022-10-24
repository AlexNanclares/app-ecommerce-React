import React from 'react'
import AddProduct from './AddProduct'
import ImageProduct from './ImageProduct'

const ProductItem = ({ product, handlerProduct }) => {
  
  const { nombre, precio, url_imagen } = product;

  return (
    <div className='child-product'>
        <div>
            <ImageProduct urlImage={url_imagen} />
        </div>
        <div className='info-product'>
            <h3>{nombre}</h3>
            <p>${precio}</p>
            <AddProduct 
              handlerProduct={handlerProduct}
              product={product} 
            />
        </div>
    </div>
  )
}

export default ProductItem