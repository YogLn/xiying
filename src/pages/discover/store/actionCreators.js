import * as actionTypes from './constants'
import {
  getPostListRequest,
  getMyPostListRequest,
  getPostDetailRequest,
  getPostListWithLikeRequest
} from '@/services/post'

const changePostListAction = postList => ({
  type: actionTypes.CHANGE_POST_LIST,
  postList
})

const changePostTotal = total => ({
  type: actionTypes.CHANGE_POST_TOTAL,
  total
})

const changeMyPostList = myPostList => ({
  type: actionTypes.CHANGE_POST_MY_POST_LIST,
  myPostList
})

const changeCurrentPost = currentPost => ({
  type: actionTypes.CHANGE_CURRENT_POST,
  currentPost
})

export const getPostListAction = (pageNo, pageSize) => {
  return dispatch => {
    getPostListRequest(pageNo, pageSize).then(res => {
      dispatch(changePostListAction(res.data?.list))
      dispatch(changePostTotal(res.data?.total))
    })
  }
}

export const getPostListWithLikeAction = (pageNo, pageSize) => {
  return dispatch => {
    getPostListWithLikeRequest(pageNo, pageSize).then(res => {
      dispatch(changePostListAction(res.data?.list))
      dispatch(changePostTotal(res.data?.total))
    })
  }
}

export const getMyPostListAction = id => {
  return dispatch => {
    getMyPostListRequest(id).then(res => {
      dispatch(changeMyPostList(res.data))
    })
  }
}

export const getCurrentPost = id => {
  return dispatch => {
    getPostDetailRequest(id).then(res => {
      dispatch(changeCurrentPost(res.data))
    })
  }
}
