import React, { useState, useEffect } from 'react'
import Item from './Item'
import products from '../../../data/products'
import '../fonts/fonts.css'

function ItemList() {
    
const [prods, setProds] = useState([])
const [loading,setLoading] =useState(true)

let getProds = new Promise ((acep) => {
    setTimeout(() => {
        acep(products)
    }, 2000);
})
useEffect(() => {
    getProds.then(acep => setProds(acep))
    .catch((err)=> console.log(err))
    .finally(()=>setLoading(false))
}, [])

getProds.then(setProds)


  return (
    <div className='d-flex justify-content-around bg-dark flex-wrap'>
        { loading ? 
            <h1 className='mainfont fs-1 text-light'>Cargando...</h1>
         :
        prods.map((product) => {
            return (
                <div key={product.id} >  
                <Item
                    image={product.image}
                    nombre={product.nombre}
                    desc={product.desc}
                    precio={product.precio}
                    stock={product.stock}
                />             
                </div>
            )
        })}
    </div>
  )
}

export default ItemList