import React from 'react'

const ImageProduct = ({ urlImage }) => {
  return (
    <img src={urlImage} alt={urlImage} className='image-product' />
  )
}

export default ImageProduct