import * as actionTypes from './constants'
import {
  getProductListReq,
  getProductDetailReq,
  getShopCartReq
} from '@/services/mall'

const changeCaramelListAction = caramelList => ({
  type: actionTypes.CHANGE_CARAMEL_LIST,
  caramelList
})

const changePhotoListAction = photoList => ({
  type: actionTypes.CHANGE_PHOTO_LIST,
  photoList
})

const changeTeachListAction = teachList => ({
  type: actionTypes.CHANGE_TEACH_LIST,
  teachList
})

const changeCurrentProAction = currentPro => ({
  type: actionTypes.CHANGE_CURRENT_PRODUCT,
  currentPro
})

const changeShopCartAction = shopCart => ({
  type: actionTypes.CHANGE_SHOP_CART,
  shopCart
})

export const getCaramelListAction = opt => {
  return dispatch => {
    getProductListReq(opt).then(res => {
      if (opt === 0) {
        dispatch(changeCaramelListAction(res.data))
      } else if (opt === 1) {
        dispatch(changePhotoListAction(res.data))
      } else {
        dispatch(changeTeachListAction(res.data))
      }
    })
  }
}

export const getProductDetailAction = id => {
  return dispatch => {
    getProductDetailReq(id).then(res => {
      dispatch(changeCurrentProAction(res.data))
    })
  }
}

export const getShopCartListAction = () => {
  return dispatch => {
    getShopCartReq().then(res => {
      const newList = []
      for (const item of res?.data) {
        newList.push({ ...item, key: item.id })
      }
      dispatch(changeShopCartAction(newList))
    })
  }
}
