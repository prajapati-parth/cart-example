import React, { Component } from 'react'

import ShopItems from './ShopItems'

import DataService from '../../service/DataService'

class Shop extends Component {
  constructor() {
    super()

    this.state = {
      shopItems: []
    }
  }

  componentWillMount() {
    DataService.getData('http://localhost:3000/shop').then(data => {
      this.setState({
        shopItems: data
      })
    })
  }

  render() {
    return <ShopItems items={this.state.shopItems} addToCart={this.handleAddToCart.bind(this)}/>
  }

  handleAddToCart(id) {
    let itemToAdd = this.state.shopItems.find(item => item.id === id),
      requestBody = {
        name: itemToAdd.name,
        image: itemToAdd.image,
        price: itemToAdd.price,
      }
    
    //API request
    DataService.addToCart(requestBody).then(data => {
      console.log(data)
    })
  }
}

export default Shop