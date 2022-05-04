import axios from 'axios'
import React, { createContext, useContext,useState,useEffect } from 'react'
import { string } from 'yup'


const ProductsContext = createContext()


const ProductsProvider = ({ children }) => {

  const Products = (id) => {

    let URL ="https://bootcamp.akbolat.net/products";
    if(id){
     URL= URL+"/?category=" + id
    }
    return axios
      .get(URL)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return error.response.status
      })
  }

  const Categories = () => {
    return axios
      .get('https://bootcamp.akbolat.net/categories')
      .then((response) => {
        const res=response.data;
        res.unshift({
          id:0,name:"Hepsi"
        })
        
        return res
      })
      .catch((error) => {
        return error.response.status
      })
  }

  return (
    <ProductsContext.Provider
      value={{
        Products,
        Categories
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
