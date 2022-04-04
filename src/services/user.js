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
    url: `/album/${userId}`,
  })
}
export function getUserInfoByIdReq(userId) {
  return request({
    url: `/user/${userId}`,
  })
}
