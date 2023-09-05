import { useState, useEffect } from "react"
export function getProducts(){
    const [products, setProducts] = useState([])

  useEffect(()=>{
    async function getAllProducts(){
      const response = await fetch('https://api.escuelajs.co/api/v1/products')
      const data = await response.json()
      setProducts(data)
    }
    getAllProducts()
  },[])
  return products
}