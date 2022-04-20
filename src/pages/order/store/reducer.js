import { Map } from 'immutable'
import * as actionTypes from './constants'

const initState = Map({
  cusOrderList: [],
  myOrderList: []
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CUS_ORDER_LIST:
      return state.set('cusOrderList', action.cusOrderList)
    case actionTypes.CHANGE_MY_ORDER_LIST:
      return state.set('myOrderList', action.myOrderList)
    default:
      return state
  }
}

export default reducer
