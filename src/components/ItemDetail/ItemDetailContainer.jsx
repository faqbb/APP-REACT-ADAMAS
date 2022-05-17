import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import products from '../../../data/products';


function ItemDetailContainer() {
    
    const [prods, setProds] = useState([])
    const [loading,setLoading] =useState(true)
    const { detailId } = useParams()

    let getProds = new Promise ((acep) => {
        setTimeout(() => {
            acep(products)
        }, 1000);
    })
    useEffect(() => {
        getProds.then(acep => setProds(acep))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))
    }, [])

    getProds.then(setProds)
    const itemFind = prods.find(producto => producto.id === detailId)
    
    
  return (
        <div className='d-flex justify-content-around bg-dark flex-wrap'>
        { loading ? 
            <h1 className='mainfont fs-1 text-light'>Cargando...</h1>
            :
            <ItemDetail 
            image={itemFind.image}
            nombre={itemFind.nombre}
            desc={itemFind.desc}
            precio={itemFind.precio}
            stock={itemFind.stock}
            />
        }
    </div>
  )
}

export default ItemDetailContainer