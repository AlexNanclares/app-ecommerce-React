import React, { useEffect } from 'react'

const Summary = ({ couponCode, setCouponCode, shopping, subTotal, setSubTotal, total, setTotal }) => {
    
    useEffect(() =>{

        let totalShopping = 0;
        let totalItemsShopping = 0;

        shopping.map((item) =>{
            totalItemsShopping += item.cantidad_ingresada * item.precio
        })

        totalShopping = shopping.length > 0 ? totalItemsShopping - couponCode : 0

        setSubTotal(totalItemsShopping);
        setTotal(totalShopping);
    },[shopping,couponCode])

    const handleInputCode = ({ target }) =>{

        let valueCoupon = target.value;

        if(valueCoupon > 100){
            valueCoupon = 100;
        }else if(valueCoupon < 0){
            valueCoupon = 0;
        }

        setCouponCode(valueCoupon)
    }
    
return (
    <div className='container-summary'>
        <h2>Summary</h2>
        <hr />
        <div className='child-summary'>
            <h3>ENTER COUPON CODE </h3>
            <input 
                type="number" 
                value={couponCode}
                onChange={handleInputCode}
            />
        </div>
        <hr />
        <div className='child-summary'>
            <h3>SUBTOTAL</h3>
            <h3>${subTotal}</h3>
        </div>
        <div className='child-summary'>
            <h3>SHIPPING</h3>
            <h3>FREE</h3>
        </div>
        <div className='child-summary'>
            <h3>COUPON</h3>
            <h3>${couponCode == "" ? 0 : couponCode}</h3>
        </div>
        <hr />
        <div className='child-summary'>
            <h2>TOTAL</h2>
            <h2>${total}</h2>
        </div>
    </div>
  )
}

export default Summary