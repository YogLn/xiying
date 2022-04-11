import request from './request'

export function getChatListRequest() {
	return request({
		url: '/chat',
	})
}