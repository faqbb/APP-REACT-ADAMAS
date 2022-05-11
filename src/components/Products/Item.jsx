import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from '../Cards/ItemCount'


function Item( { image, nombre , desc, precio, stock }) {
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {image} />
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
      {desc}
    </Card.Text>
    <Card.Text className='fs-2'>
      {precio}
    </Card.Text>
    <ItemCount stock={stock} initial={1}/>
  </Card.Body>
</Card>
  )
}

export default Item