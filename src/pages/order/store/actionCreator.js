import * as actionTypes from './constants'
import { getOrderList, getMyProductOrderReq } from '@/services/order'

const changeMyOrderListAction = myOrderList => ({
  type: actionTypes.CHANGE_MY_ORDER_LIST,
  myOrderList
})
const changeCusOrderListAction = cusOrderList => ({
  type: actionTypes.CHANGE_CUS_ORDER_LIST,
  cusOrderList
})

const changeProductListAction = productList => ({
  type: actionTypes.CHANGE_PRODUCT_ORDER_LIST,
  productList
})

export const getOrderListAction = opt => {
  return dispatch => {
    getOrderList(opt).then(res => {
      const newList = []
      for (const item of res?.data) {
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

export const getProductListAction = () => {
  return dispatch => {
    getMyProductOrderReq().then(res => {
      const newList = []
      for (const item of res?.data) {
        newList.push({ ...item, key: item.id })
      }
      dispatch(changeProductListAction(newList))
    })
  }
}
