import request from './request'

export function registerRequest(data) {
	return request({
		url: '/register',
		method: 'POST',
		data
	})
}

export function loginRequest(data) {
	return request({
		url: '/login',
		method: 'POST',
		data
	})
}