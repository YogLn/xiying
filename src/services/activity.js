import request from './request'

export function getActivityListRequest() {
  return request({
    url: '/campaign/briefs'
  })
}
export function getActivityDetailRequest(id) {
  return request({
    url: `/campaign/detail/${id}`
  })
}
export function getActivityWorkListRequest(id) {
  return request({
    url: `/campaign/work/${id}`
  })
}
export function joinActivityRequest(data) {
  return request({
    url: `/campaign/work`,
    method: 'POST',
    data
  })
}
