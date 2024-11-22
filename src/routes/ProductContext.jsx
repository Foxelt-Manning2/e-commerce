/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { createContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const ProductContext = createContext()
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loggedIn, setLoggedIn] = useState(false);
  
  const [user, setUser] = useState(()=>{
     const storedUser = sessionStorage.getItem('user');
     if (storedUser){
      setLoggedIn(true)
     }
   return storedUser?JSON.parse(storedUser): []
  });
  const [cart, setCart] = useState(() => {
    const savedData = localStorage.getItem('cart')
    return savedData ? JSON.parse(savedData) : []
  })

  const [personalInfo, setPersonalInfo] = useState(() => {
    const savedData = localStorage.getItem('User information')
    return savedData ? JSON.parse(savedData) : []
  })

 useEffect(() => {
    localStorage.setItem(
      'User information',
      JSON.stringify(personalInfo)
    )
  }, [personalInfo])


  useEffect(() => {
    GetProducts()
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  
  useEffect(()=>{
   const storedUser = sessionStorage.getItem('user');
   if (storedUser){
       setLoggedIn(true);
   }
 },[])

  const GetProducts = async () => {
    const url = 'https://fakestoreapi.com/products'
    try {
      const response = await axios(url)
      const data = response.data
      setProducts(data)
    } catch (error) {
      console.error(error)
    }
  }

  function login(user){
    sessionStorage.setItem('user',JSON.stringify(user));
    setLoggedIn(true);
 }
 function logout(){
    sessionStorage.removeItem('user');
    setLoggedIn(false);
 };


  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        setCart,
        personalInfo,
        setPersonalInfo,
        user,
        setUser,
        login,
        logout,
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => {
  const context = useContext(ProductContext);

    if(context) return context;
    
    throw new Error("The context cannot be used outside the ProductContext");
}
