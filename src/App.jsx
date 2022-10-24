import Header from "./components/Header"
import './App.css'
import ProducList from "./components/ProducList"
import ShoppingCart from "./components/ShoppingCart"
import Summary from "./components/Summary"
import productsAPI from "./ProductsAPI";
import { useState } from "react"

function App() {

  const [shopping, setShopping] = useState([]);
  const [products, setProduct] = useState(productsAPI);
  const [couponCode, setCouponCode] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <>
      <Header 
        shopping={shopping} 
      />
      <hr /> 
      <ProducList 
        products={products} 
        setProduct={setProduct} 
        setShopping={setShopping} 
        shopping={shopping} 
      />
      <hr />
      <div className="container-components">
        <ShoppingCart 
          shopping={shopping} 
          setShopping={setShopping} 
        />

        <Summary 
          couponCode={couponCode} 
          setCouponCode={setCouponCode} 
          shopping={shopping}
          subTotal={subTotal}
          setSubTotal={setSubTotal}
          total={total}
          setTotal={setTotal}
        />
      </div>
    </>
    
  )
}

export default App
