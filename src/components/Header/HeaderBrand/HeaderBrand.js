import React from 'react'

import './headerBrand.less'

const HeaderBrand = (props) => {
  return (
    <h2 className='headerBrand'>{props.brandName}</h2>
  )
}

export default HeaderBrand