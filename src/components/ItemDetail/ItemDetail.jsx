import React from 'react'
import { Image } from 'react-bootstrap'
import ItemCount from '../Cards/ItemCount'

function ItemDetail({ image, nombre, desc, precio, stock}) {
  return (
    
      <div className='d-flex bg-secondary'>
        <div className='col-4  '><Image src={image} alt='producto' className='img-fluid border border-4 border-danger rounded'/></div>
        <div className='col-8 d-flex flex-column justify-content-between'>
          <div className='fs-1 mainfont text-light pt-5'> {nombre}</div>
          <div className='fs-3 secondaryfont text-light'> {desc}</div>
          <div className='fs-5 secondaryfont text-light'>Disponibilidad: {stock}</div>
          <div className='fs-1 mainfont text-danger'> $ <span className='text-light'>{precio}</span></div>
          <div className='px-5 fs-3 mb-2'>
            <ItemCount stock={stock} initial={1} />
            </div>
        </div>
      </div>
  )
}

export default ItemDetail