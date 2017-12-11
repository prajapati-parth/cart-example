import { combineReducers } from 'redux'

import Cart from './reducers/cart'
import Shop from './reducers/shop'

export default combineReducers({
  Cart,
  Shop
})