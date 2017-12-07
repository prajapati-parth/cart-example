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

  render() {
    return <ShopItems
      items={this.state.shopItems}
      addToCart={this.handleAddToCart.bind(this)}
      loadMoreData={this.handleLoadMoreData.bind(this)} />
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

  handleLoadMoreData(pageSize) {
    DataService.getData(`http://localhost:3000/shop?_limit=6&_page=${pageSize}`).then(data => {
      let newData = this.state.shopItems.concat(data)
      this.setState({
        shopItems: newData
      })
    })
  }
}

export default Shop