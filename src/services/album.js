import request from './request'

export function getMyAlbumRequest() {
	return request({
		url: '/album/curr',
	})
}

export function getAlbumWorksRequest(albumId) {
	return request({
		url: `/work/${albumId}`,
	})
}

export function addAlbumRequest(data) {
	return request({
		url: `/album`,
		method: 'POST',
		data
	})
}

export function deleteAlbumRequest(albumId) {
	return request({
		url: `/album/${albumId}`,
		method: 'DELETE',
	})
}

export function addAlbumWorksRequest(data) {
	return request({
		url: `/work`,
		method: 'POST',
		data
	})
}