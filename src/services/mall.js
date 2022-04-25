import request from './request'

// 获取商品list
export function getProductListReq(option) {
  return request({
    url: `/product/list/${option}`
  })
}

export function getProductDetailReq(productId) {
  return request({
    url: `/product/detail/${productId}`
  })
}

export function buyProductReq(data) {
  return request({
    url: '/product/buy',
    method: 'POST',
    data
  })
}

// 加入购物车
export function addShopCartReq(data) {
  return request({
    url: '/shoppingCart',
    method: 'POST',
    data
  })
}

// 移除购物车
export function removeShopCartReq(id) {
  return request({
    url: `/shoppingCart/${id}`,
    method: 'DELETE'
  })
}

export function getShopCartReq() {
  return request({
    url: `/shoppingCart`
  })
}
