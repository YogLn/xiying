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
