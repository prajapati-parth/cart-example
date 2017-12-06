import React from 'react'
import { ShoppingCart } from 'react-feather'

import './HeaderInfo.less'

const HeaderInfo = (props) => {
  return (
    <div className='headerInfoContainer'>
      <div className='shoppingCartContainer'>
        <ShoppingCart size={24} />
        <span className='cartItems'>{props.itemsCount || 0}</span>
      </div>
    </div>
  )
}

export default HeaderInfo