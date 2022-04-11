import request from './request'

export function storeMessageRequest(id) {
	return request({
		url: `/chat/messageHistory/${id}/`,
	})
}