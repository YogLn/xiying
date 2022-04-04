import request from './request'

export function getActivityListRequest() {
	return request({
		url: '/campaign/briefs',
	})
}
export function getActivityDetailRequest(id) {
	return request({
		url: `/campaign/detail/${id}`,
	})
}