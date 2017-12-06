import React, { Component } from 'react'

import Product from '../../Product'

class ShopItems extends Component {
  render() {
    return (
      <div className='shopItemsContainer container'>
        <div className='row'>
          {
            this.props.items.map(item => (
              <div className='col-sm-4 col-xs-6' key={item.id}>
                <Product
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  isAddedToCart={false}
                  handleActionClick={this.productActionClicked.bind(this)} />
              </div>
            ))
          }
        </div>
      </div>
    )
  }

  productActionClicked(id) {
    this.props.addToCart(id)
  }
}

export default ShopItems