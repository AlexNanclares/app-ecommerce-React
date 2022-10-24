import React from 'react'
import ImageProduct from './ImageProduct'

const ItemShopping = ({ itemShopping, setShopping, shopping }) => {
  
    const { nombre, descripcion, precio, url_imagen, cantidad_ingresada } = itemShopping;
  
    const handleInputAmount = ({ target }) => {
    
        let valueInput = target.value.trim() !== "" ? Number(target.value.trim()) : ""

        const newShopping = shopping.map((item) =>{
            if(item.id === itemShopping.id){
                
                if(!isNaN(valueInput)){
                    
                    if(valueInput < 0){
                        valueInput = 0;
                    }else if(valueInput > item.cantidad_disponible){
                        valueInput = item.cantidad_disponible;
                    }
                }

              return {...item, cantidad_ingresada: valueInput}
            } else {
              return item;
            }
        })
    
        setShopping(newShopping);
      }


    return (
        <div className='item-shopping'>
            <div>
                <ImageProduct urlImage={url_imagen} />
            </div>
            <div className='child-shopping'>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <p>${precio}</p>
            </div>
            <div className='container-amount'>
                <input 
                    type="number" 
                    placeholder='amount'
                    value={cantidad_ingresada}
                    onChange={handleInputAmount}
                />
            </div>
        </div>
    )
}

export default ItemShopping