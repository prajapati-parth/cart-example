import * as ActionTypes from '../action-types/cart'
import DataService from '../../service/DataService'

export const updateCartCount = (newCount) => {
  return {
    type: ActionTypes.UPDATE_CART_COUNT,
    cartCount: newCount
  }
}

export const updateCart = () => {
  return dispatch => {
    DataService.getData('https://cart-example-api-heroku.herokuapp.com/cart').then(data => {
      dispatch({
        type: ActionTypes.UPDATE_CART,
        cartItems: data
      })
    })
  }
}

export const removeFromCart = (id, cartItems) => {
  return dispatch => {
    DataService.removeFromCart(id).then(data => {
      let updatedCart = cartItems.filter(item => item.id !== id)
      dispatch({
        type: ActionTypes.UPDATE_CART,
        cartItems: updatedCart
      })

      dispatch({
        type: ActionTypes.UPDATE_CART_COUNT,
        cartCount: updatedCart.length
      })
    })
  }
}