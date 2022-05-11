import React, { useEffect, useState } from 'react'
import Item from './Item'
import products from '../../../data/products'

function ItemList() {
    
const [prods, setProds] = useState([])

const getProds = new Promise ((acep) => {
    setTimeout(() => {
        acep(products)
    }, 2500);
})

const getProdsData =  () => {
    setProds(getProds)
}

useEffect(() => {
    getProdsData();
})


  return (
    <div>
        {prods.map((product) => {
            return (
                <div key={product.id}>  
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