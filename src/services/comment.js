import request from './request'

export function addCommentRequest(data) {
  return request({
    url: '/appointOrder/comment',
    method: 'PUT',
    data
  })
}

export function getRemarkListRequest(photographerId) {
  return request({
    url: `/appointOrder/comment/${photographerId}`
  })
}
