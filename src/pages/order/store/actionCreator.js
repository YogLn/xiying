import * as actionTypes from './constants'
import { getOrderList } from '@/services/order'

const changeMyOrderListAction = myOrderList => ({
  type: actionTypes.CHANGE_MY_ORDER_LIST,
  myOrderList
})
const changeCusOrderListAction = cusOrderList => ({
  type: actionTypes.CHANGE_CUS_ORDER_LIST,
  cusOrderList
})

export const getOrderListAction = opt => {
  return dispatch => {
    getOrderList(opt).then(res => {
      const newList = []
      for (const item of res.data) {
        newList.push({ ...item, key: item.id })
      }
      if (opt === 1) {
        dispatch(changeMyOrderListAction(newList))
      } else {
        dispatch(changeCusOrderListAction(newList))
      }
    })
  }
}
