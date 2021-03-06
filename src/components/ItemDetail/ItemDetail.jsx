import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import ItemCount from '../Cards/ItemCount'
import GotoCart from '../Cards/GotoCart';
import { useCartContext } from '../../context/CartContext'

function ItemDetail( prods ) {
  const [count, setCount] = useState();
  const [inputType, setinputType] = useState('boton')
  const {addtoCart, cartList} = useCartContext

  function onAdd (cant) {
    setCount(cant)
    setinputType('input')
    console.log(cant)
    addtoCart(prods, count)
  }
  console.log(cartList)

  return (
      <div className='d-flex bg-secondary'>
        <div className='col-4  '><Image src={prods.image} alt='producto' className='img-fluid border border-4 border-danger rounded'/></div>
        <div className='col-8 d-flex flex-column justify-content-between'>
          <div className='fs-1 mainfont text-light pt-5'> {prods.nombre}</div>
          <div className='fs-3 secondaryfont text-light'> {prods.desc}</div>
          <div className='fs-5 secondaryfont text-light'>Disponibilidad: {prods.tock}</div>
          <div className='fs-1 mainfont text-danger'> $ <span className='text-light'>{prods.precio}</span></div>
          <div className='px-5 fs-3 mb-2'>
          {
                inputType === 'boton' ? 
                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                : 
                <GotoCart/>
            }
            </div>
        </div>
      </div>
  )
}

export default ItemDetail