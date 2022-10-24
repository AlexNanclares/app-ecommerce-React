import React from 'react'
import ProductItem from './ProductItem'

const ProducList = ({ products, setProduct, setShopping, shopping }) => {
    
    const handlerProduct = (product) =>{

        const { id, nombre, descripcion, precio, url_imagen, cantidad_disponible } = product;

        const newItemShopping = [...shopping,{
          id,
          nombre,
          descripcion,
          precio,
          url_imagen,
          cantidad_disponible,
          cantidad_ingresada: 1
        }]

        const newProducts = products.map((item) => {
            if(product.id === item.id){
                return {...item, agregado: true}
            } else {
                return item;
            }
        })
    
        setShopping(newItemShopping);
        setProduct(newProducts);
      }

    return (
        <div className='container-products'>
            {
                products.map((product) =>(
                    <ProductItem 
                        key={ product.id }
                        product={ product }
                        setShopping={setShopping}
                        shopping={shopping}
                        handlerProduct={handlerProduct}
                    />
                ))
            }
        </div>
    )
}

export default ProducList