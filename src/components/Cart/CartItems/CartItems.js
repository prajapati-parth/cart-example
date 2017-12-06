import React, { Component } from 'react'

import Product from '../../Product'

class CartItems extends Component {
  render() {
    return (
      <div className='cartItemsContainer container'>
        <div className='row'>
          {
            this.props.items.map(item => (
              <div className='col-sm-4 col-xs-6' key={item.id}>
                <Product
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  isAddedToCart
                  handleActionClick={this.productActionClicked.bind(this)} />
              </div>
            ))
          }
        </div>
      </div>
    )
  }

  productActionClicked(id) {
    this.props.handleItemRemove(id)
  }
}

export default CartItems