import React from 'react'
import { useState } from 'react'
import '../fonts/fonts.css'

function ItemCount({stock, initial}) {
    const [cantpro, setCantpro] = useState(initial)
    function sumarpro (props){
        setCantpro(cantpro + props)
            }

    function agregarCarrito (){
        console.log('Has agregado '+ cantpro + ' productos al carrito')
    }

  return (
      < div className='d-flex col-12 justify-content-around bg-secondary align-items-center'>
        <button onClick={() => sumarpro(-1) }  disabled={cantpro === initial ? true : null} className='btn btn-dark'>-</button>
        <div className='mainfont'>{ cantpro }</div>
        <button onClick={ () => sumarpro(+1) } disabled={cantpro === stock ? true : null} className='btn btn-dark'>+</button>
        <button onClick={ agregarCarrito } className='btn btn-danger'> Enviar al carrito</button>
      </div>
  )

  }
export default ItemCount