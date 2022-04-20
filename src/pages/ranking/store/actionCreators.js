import * as actionTypes from './constants'
import {
  getRankListRequest,
  getUserListRequest,
  getRankListNewRequest
} from '@/services/rank'

const changeRankListAction = rankList => ({
  type: actionTypes.CHANGE_RANK_LIST,
  rankList
})
const changeNewRankListAction = newList => ({
  type: actionTypes.CHANGE__NEW_RANK_LIST,
  newList
})

const changeUserListAction = userList => ({
  type: actionTypes.CHANGE_USER_LIST,
  userList
})

export const getRankListAction = (pageNow = 1, pageSize = 10) => {
  return dispatch => {
    getRankListRequest(pageNow, pageSize).then(res => {
      if (res.data) {
        dispatch(changeRankListAction(res?.data?.list))
      }
    })
  }
}
export const getNewRankListAction = (pageNow = 1, pageSize = 10) => {
  return dispatch => {
    getRankListNewRequest(pageNow, pageSize).then(res => {
      if (res.data) {
        dispatch(changeNewRankListAction(res.data?.list))
      }
    })
  }
}
export const getUserListAction = (pageNow = 1, pageSize = 100) => {
  return dispatch => {
    getUserListRequest(pageNow, pageSize).then(res => {
      dispatch(changeUserListAction(res?.data?.list))
    })
  }
}
