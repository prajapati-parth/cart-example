import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'

import Product from '../../Product'

class ShopItems extends Component {
  render() {
    return (
      <div className='shopItemsContainer'>
        <div className='row'>
          <InfiniteScroll
            pageStart={0}
            initialLoad={true}
            loadMore={this.loadMore.bind(this)}
            hasMore={true}
            loader={<div className="loader">Loading ...</div>} >
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
            </InfiniteScroll>
        </div>
      </div>
    )
  }

  productActionClicked(id) {
    this.props.addToCart(id)
  }

  loadMore(pageSize) {
    if(pageSize < 7) {
      this.props.loadMoreData(pageSize)
    }
    
  }
}

export default ShopItems