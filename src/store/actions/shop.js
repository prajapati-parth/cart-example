import * as ActionTypes from '../action-types/shop'
import DataService from '../../service/DataService'

export const updateShopItems = (pageSize, shopItems) => {
  return dispatch => {
    DataService.getData(`https://cart-example-api-heroku.herokuapp.com/shop?_limit=6&_page=${pageSize}`).then(data => {
      let newData = shopItems.concat(data)
      dispatch({
        type: ActionTypes.UPDATE_SHOP_ITEMS,
        shopItems: newData
      })
    })
  }
}