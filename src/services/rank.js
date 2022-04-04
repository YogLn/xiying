import request from './request'

export function getRankListRequest(pageNow = 1, pageSize = 10) {
  return request({
    url: '/rank/work',
    params: {
      pageNow,
      pageSize
    }
  })
}
export function getUserListRequest(pageNow = 1, pageSize = 10) {
  return request({
    url: '/rank/user',
    params: {
      pageNow,
      pageSize
    }
  })
}

export function putWorkLikeRequest(rankWorkId) {
  return request({
    url: `/rank/like/${rankWorkId}`,
    method: 'PUT'
  })
}
export function addWorkRequest(data) {
  return request({
    url: `/rank`,
    method: 'POST',
    data
  })
}
