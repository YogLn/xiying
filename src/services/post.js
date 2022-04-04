import request from './request'

export function getPostListRequest(pageNow = 1, pageSize = 5) {
  return request({
    url: '/post/list',
    params: {
      pageNow,
      pageSize
    }
  })
}
export function getPostListWithLikeRequest(pageNow = 1, pageSize = 5) {
  return request({
    url: '/post/listWithLike',
    params: {
      pageNow,
      pageSize
    }
  })
}

export function addPostListRequest(data) {
  return request({
    url: '/post',
    method: 'POST',
    data
  })
}
export function getPostListByIdRequest(id) {
  return request({
    url: `/post/${id}`,
  })
}

export function getMyPostListRequest(id) {
  return request({
    url: `/post/${id}`
  })
}

export function getPostDetailRequest(id) {
  return request({
    url: `/post/detail`,
    params: {
      postId: id
    }
  })
}

export function addCommentRequest(data) {
  return request({
    url: '/comment',
    method: 'POST',
    data
  })
}
export function deletePostRequest(postId) {
  return request({
    url: `/post/${postId}`,
    method: 'DELETE'
  })
}

export function postLikeRequest(data) {
  return request({
    url: `/post/like`,
    method: 'POST',
    data
  })
}

export function postCancelLikeRequest(data) {
  return request({
    url: `/post/cancelLike`,
    method: 'POST',
    data
  })
}

export function getLikeStatusRequest(postId) {
  return request({
    url: `/post/like/${postId}`
  })
}

export function deleteCommentRequest(data) {
  return request({
    url: `/comment`,
    method: 'DELETE',
    data
  })
}
