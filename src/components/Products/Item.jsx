import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from '../Cards/ItemCount'
import '../fonts/fonts.css'


function Item( { image, nombre , desc, precio, stock }) {
  return (
    
    <Card style={{ width: '19rem' }} className='bg-secondary'>
  <Card.Img variant="top" src= {image} />
  <Card.Body>
    <Card.Title className='secondaryfont fs-2 text-light'>{nombre}</Card.Title>
    <Card.Text className='secondaryfont fs-6'>
      {desc}
    </Card.Text>
    <Card.Text className='fs-3 mainfont'>
      <b className='text-danger'>$</b> <b className='text-light'>{precio}</b>
    </Card.Text>
    <Card.Text className='fs-6 secondaryfont'>
      Disponibles = {stock}
    </Card.Text>
    <ItemCount stock={stock} initial={1}/>
  </Card.Body>
</Card>
  )
}

export default Item