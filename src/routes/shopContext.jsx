/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from 'react'
import { useProducts } from './ProductContext'
import { useParams } from 'react-router-dom'

const ShopContext = createContext()
export const ShopProvider = ({ children }) => {
  const [productCategory, setProductCategory] = useState([])

  const { products } = useProducts()
  const params = useParams();
  // console.log(category);
  console.log(params.category);

  useEffect(() => {
    if(params.category){
      const filteredProducts = products.filter(product => product.category === params.category)
      setProductCategory(filteredProducts);
      console.log(productCategory)
    }
  }, [params.category, products])

  return (
    <ShopContext.Provider value={{ productCategory }}>
      {children}
    </ShopContext.Provider>
  )
}
export const useShop = () => {
  const context = useContext(ShopContext)

  if (context) return context

  throw new Error('The context cannot be used outside the ShopProvider')
}
