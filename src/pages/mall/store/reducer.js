import { Map } from 'immutable'
import * as actionTypes from './constants'

const initState = Map({
  caramelList: [],
  photoList: [],
  teachList: [],
  currentPro: {},
  shopCart: []
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CARAMEL_LIST:
      return state.set('caramelList', action.caramelList)
    case actionTypes.CHANGE_PHOTO_LIST:
      return state.set('photoList', action.photoList)
    case actionTypes.CHANGE_TEACH_LIST:
      return state.set('teachList', action.teachList)
    case actionTypes.CHANGE_CURRENT_PRODUCT:
      return state.set('currentPro', action.currentPro)
    case actionTypes.CHANGE_SHOP_CART:
      return state.set('shopCart', action.shopCart)
    default:
      return state
  }
}

export default reducer
