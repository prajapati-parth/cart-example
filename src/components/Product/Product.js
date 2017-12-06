import React from 'react'

import './Product.less'

const Product = (props) => {
  const { id, name, image, price, isAddedToCart, handleActionClick } = props
  return (
    <div className='productContainer'>
      <img src={image} alt={name} />
      <div>{name}</div>
      <div>{price}</div>
      <div className='row'>
        <div className='col-xs-6'>
          <button onClick={() => handleActionClick(id)}>{isAddedToCart ? 'Remove' : 'Add to cart'}</button>
        </div>
      </div>
    </div>
  )
}

export default Product