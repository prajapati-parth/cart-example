import React, { Component } from 'react'
import { connect } from 'react-redux'

import HeaderBrand from './HeaderBrand'
import HeaderInfo from './HeaderInfo'

import AppCopy from '../../utils/AppCopy'
import DataService from '../../service/DataService'
import * as CartSelectors from '../../store/reducers/cart'
import * as CartActions from '../../store/actions/cart'

class HeaderContainer extends Component {
  componentWillMount() {
    DataService.getData('http://localhost:3000/cart').then(data => {
      if (data && data.length) {
        this.props.dispatch(
          CartActions.updateCartCount(data.length)
        )
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
            <HeaderInfo itemsCount={this.props.cartCount} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cartCount: CartSelectors.getCartCount(state)
  }
}

export default connect(mapStateToProps)(HeaderContainer)