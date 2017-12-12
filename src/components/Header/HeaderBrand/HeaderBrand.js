import React from 'react'
import { Link } from 'react-router-dom'

import './headerBrand.less'

const HeaderBrand = (props) => {
  return (
    <div className='headerBrandContainer'>
      <Link to='/shop'>
        <h2 className='headerBrand'>{props.brandName}</h2>
      </Link>
    </div>
  )
}

export default HeaderBrand