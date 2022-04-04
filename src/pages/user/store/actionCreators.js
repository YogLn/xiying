import * as actionTypes from './constants'
import { getPostListByIdRequest } from '@/services/post'
import { getUserAlbumReq, getUserInfoByIdReq } from '@/services/user'

const changePostListAction = postList => ({
  type: actionTypes.CHANGE_POST_LIST,
  postList
})
const changeAlbumListAction = albumList => ({
  type: actionTypes.CHANGE_ALBUM_LIST,
  albumList
})
const changeUserInfoAction = userInfo => ({
  type: actionTypes.CHANGE_USER_INFO,
  userInfo
})

export const getPostListByIdAction = id => {
  return dispatch => {
    getPostListByIdRequest(id).then(res => {
      dispatch(changePostListAction(res.data))
    })
  }
}

export const getUserAlbumAction = id => {
  return dispatch => {
    getUserAlbumReq(id).then(res => {
      dispatch(changeAlbumListAction(res.data))
    })
  }
}

export const getUserInfoAction = id => {
  return dispatch => {
    getUserInfoByIdReq(id).then(res => {
      dispatch(changeUserInfoAction(res.data))
    })
  }
}
