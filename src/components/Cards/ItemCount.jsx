import React from 'react'
import { useState } from 'react'

function ItemCount({stock, initial}) {
    const [cantpro, setCantpro] = useState(initial)
    function sumarpro (props){
        setCantpro(cantpro + props)
            }

    function agregarCarrito (){
        console.log('Has agregado '+ cantpro + ' productos al carrito')
    }

  return (
      < div className='d-flex col-12 justify-content-around bg-secondary'>
        <div>stock = {stock}</div>
        <button onClick={() => sumarpro(-1) }  disabled={cantpro === initial ? true : null}>-</button>
        <div>{ cantpro }</div>
        <button onClick={ () => sumarpro(+1) } disabled={cantpro === stock ? true : null}>+</button>
        <button onClick={ agregarCarrito }> Enviar al carrito</button>
      </div>
  )

  }
export default ItemCount