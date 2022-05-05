import React from 'react'

function ItemListContainer( { productos='pesas' } ) {
  return (
    <ul>
        <li>{productos}</li>
        <li>{productos} 2</li>
        <li>{productos} 3</li>
    </ul>
  )
}

export default ItemListContainer