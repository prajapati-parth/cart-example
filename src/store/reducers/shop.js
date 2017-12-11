import * as ActionTypes from '../action-types/shop'

const initialState = {
  shopItems: []
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case ActionTypes.UPDATE_SHOP_ITEMS:
      return Object.assign({}, state, {
        ...state.Shop,
        shopItems: action.shopItems
      })
    default:
      return state
  }
}

// selectors
export const getShopItems = state => {
  return state.Shop ? state.Shop.shopItems : initialState.shopItems
}