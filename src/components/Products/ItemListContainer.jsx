import React from 'react'
import ItemList from './ItemList'

function ItemListContainer( {category} ) {
  console.log(category)
  return (
    <div>
      <ItemList filter={category} />
    </div>
  )
}

export default ItemListContainer