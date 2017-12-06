import React, { Component } from 'react'

import HeaderBrand from './HeaderBrand'
import HeaderInfo from './HeaderInfo'

import AppCopy from '../../utils/AppCopy'

class HeaderContainer extends Component {
  render() {
    return (
      <div className='container headerContainer'>
        <div className="row">
          <div className="col-md-4">
            <HeaderBrand brandName={AppCopy.BrandName} />
          </div>
          <div className="col-md-8">
            <HeaderInfo />
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderContainer