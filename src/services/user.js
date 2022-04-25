import request from './request'

export function getUserInfo() {
  return request({
    url: '/user/curr'
  })
}

export function changeUserInfoReq(data) {
  return request({
    url: '/user',
    method: 'PUT',
    data
  })
}

export function getUserAlbumReq(userId) {
  return request({
    url: `/album/${userId}`
  })
}

export function getUserInfoByIdReq(userId) {
  return request({
    url: `/user/${userId}`
  })
}

// 充值
export function chargeReq(amount) {
  return request({
    url: `/user/recharge/${amount}`,
    method: 'PUT'
  })
}
// 修改密码
export function changePwd(data) {
  return request({
    url: `/user/pwd`,
    method: 'PUT',
    data
  })
}
// 添加地址
export function addAddressReq(data) {
  return request({
    url: `/userAddress`,
    method: 'POST',
    data
  })
}
// 修改地址
export function updateAddressReq(data) {
  return request({
    url: `/userAddress`,
    method: 'PUT',
    data
  })
}

export function getAddressReq() {
  return request({
    url: `/userAddress`
  })
}
