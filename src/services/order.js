import request from './request'

// 添加订单
export function addOrderRequest(data) {
  return request({
    url: `/appointOrder`,
    method: 'POST',
    data
  })
}

// 订单列表
export function getOrderList(option) {
  return request({
    url: `/appointOrder/Orders/${option}`
  })
}

// 同意 1 拒绝2
export function handleOrderReq(option, orderId) {
  return request({
    url: '/appointOrder/isAccepted',
    method: 'PUT',
    params: {
      option,
      orderId
    }
  })
}
// 取消订单
export function handleCancelOrderReq(orderId) {
  return request({
    url: `/appointOrder/cancel/${orderId}`,
    method: 'PUT'
  })
}
// 完成订单
export function handleCompleteOrderReq(orderId) {
  return request({
    url: `/appointOrder/end/${orderId}`,
    method: 'PUT'
  })
}
