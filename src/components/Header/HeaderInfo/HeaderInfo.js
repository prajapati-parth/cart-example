import React from 'react'
import { ShoppingCart } from 'react-feather'
import { Link } from 'react-router-dom'

import './HeaderInfo.less'

const HeaderInfo = (props) => {
  return (
    <div className='headerInfoContainer'>
      <Link to='/cart'>
        <div className='shoppingCartContainer'>
          <ShoppingCart size={24} />
          <span className='cartItems'>{props.itemsCount || 0}</span>
        </div>
      </Link>
    </div>
  )
}

export default HeaderInfo