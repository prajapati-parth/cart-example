import * as ActionTypes from '../action-types/cart'

const initialState= {
  cartCount: 0,
  cartItems: []
}

export default function reducer(state=initialState, action={}) {
  switch(action.type) {
    case ActionTypes.UPDATE_CART_COUNT:
      return Object.assign({}, state, {
        ...state.Cart,
        cartCount: action.cartCount
      })
    case ActionTypes.UPDATE_CART:
      return Object.assign({}, state, {
        ...state.Cart,
        cartItems: action.cartItems
      })
    default:
      return state
  }
}

// selectors
export const getCartCount = state => {
  return state.Cart ? state.Cart.cartCount : initialState.cartCount
}

export const getCartItems = state => {
  return state.Cart ? state.Cart.cartItems : initialState.cartItems
}