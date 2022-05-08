import axios from 'axios'
import React, { createContext, useContext,useState,useEffect } from 'react'



const ProductsContext = createContext()


const ProductsProvider = ({ children }) => {

  const Products = async (id) => {

    let URL ="https://bootcamp.akbolat.net/products";
    if(id){
     URL= URL+"/?category=" + id
    }
    try {
      const response = await axios
        .get(URL)
      return response.data
    } catch (error) {
      return error.response.status
    }
  }

  const Product = async (id) => {

    let URL ="https://bootcamp.akbolat.net";
    if(id){
     URL= URL+"/products/" +id
    }
    try {
      const response = await axios
        .get(URL)
      return response.data
    } catch (error) {
      return error.response.status
    }
  }

  const Categories = async () => {
    try {
      const response = await axios
        .get('https://bootcamp.akbolat.net/categories')
      const res = response.data
      res.unshift({
        id: 0, name: "Hepsi"
      })
      return res
    } catch (error) {
      return error.response.status
    }
  }

  return (
    <ProductsContext.Provider
      value={{
        Products,
        Categories,
        Product
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

function useProduct() {
  return useContext(ProductsContext)
}




export { ProductsProvider, ProductsContext, useProduct }
