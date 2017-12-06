import React, { Component } from 'react'

import CartItems from './CartItems'

import DataService from '../../service/DataService'

class CartContainer extends Component {
  constructor() {
    super()

    this.state = {
      cartData: []
    }
  }

  componentWillMount() {
    DataService.getData('http://localhost:3000/cart').then(data => {
      this.setState({
        cartData: data
      })
    })
  }

  render() {
    return <CartItems items={this.state.cartData} handleItemRemove={this.handleItemRemove.bind(this)} />
  }

  handleItemRemove(id) {
    DataService.removeFromCart(id).then(data => {
      console.log(data)
    })
  }
}

export default CartContainer