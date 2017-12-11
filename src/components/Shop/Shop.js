import React, { Component } from 'react'
import { connect } from 'react-redux'

import ShopItems from './ShopItems'

import DataService from '../../service/DataService'
import * as ShopSelectors from '../../store/reducers/shop'
import * as ShopActions from '../../store/actions/shop'
import * as CartSelectors from '../../store/reducers/cart'
import * as CartActions from '../../store/actions/cart'

class Shop extends Component {
  render() {
    return (
      <div>
        <ShopItems
          items={this.props.shopItems}
          addToCart={this.handleAddToCart.bind(this)}
          loadMoreData={this.handleLoadMoreData.bind(this)} />
      </div>
    )
  }

  handleAddToCart(id) {
    let itemToAdd = this.props.shopItems.find(item => item.id === id),
      requestBody = {
        name: itemToAdd.name,
        image: itemToAdd.image,
        price: itemToAdd.price,
      }
    
    //API request
    DataService.addToCart(requestBody).then(data => {
      let newCount = this.props.cartCount + 1
      this.props.dispatch(
        CartActions.updateCartCount(newCount)
      )
    })
  }

  handleLoadMoreData(pageSize) {
    this.props.dispatch(
      ShopActions.updateShopItems(pageSize, this.props.shopItems)
    )
  }
}

function mapStateToProps(state) {
  return {
    shopItems: ShopSelectors.getShopItems(state),
    cartCount: CartSelectors.getCartCount(state)
  }
}

export default connect(mapStateToProps)(Shop)