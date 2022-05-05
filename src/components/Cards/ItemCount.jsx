import React from 'react'
import { useState } from 'react'

function ItemCount({stock, initial}) {
    const [cantpro, setCantpro] = useState(initial)
    function sumarpro (){
        if (!(cantpro == stock)){
            setCantpro(cantpro + 1)
            }
        }
    function restarpro (){
        if (!(cantpro == initial)){
            setCantpro(cantpro - 1)
            }
        }
    function agregarCarrito (){
        console.log('Has agregado '+ cantpro + ' productos al carrito')
    }

  return (
      < div className='d-flex col-12 justify-content-around bg-secondary'>
        <div>stock = {stock}</div>
        <button onClick={ restarpro }>-</button>
        <div>{ cantpro }</div>
        <button onClick={ sumarpro }>+</button>
        <button onClick={ agregarCarrito }> Enviar al carrito</button>
      </div>
  )
}

export default ItemCount