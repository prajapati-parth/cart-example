import React, { Component } from 'react'

import HeaderBrand from './HeaderBrand'
import HeaderInfo from './HeaderInfo'

import AppCopy from '../../utils/AppCopy'

import DataService from '../../service/DataService'

class HeaderContainer extends Component {
  constructor() {
    super()

    this.state = {
      cartItemsCount: 0
    }
  }

  componentWillMount() {
    DataService.getData('http://localhost:3000/cart').then(data => {
      if (data && data.length) {
        this.setState({
          cartItemsCount: data.length
        })
      }
    })
  }

  render() {
    return (
      <div className='container headerContainer'>
        <div className="row">
          <div className="col-xs-4">
            <HeaderBrand brandName={AppCopy.BrandName} />
          </div>
          <div className="col-xs-8">
            <HeaderInfo itemsCount={this.state.cartItemsCount} />
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderContainer