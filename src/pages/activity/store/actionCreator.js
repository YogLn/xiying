import * as actionTypes from './constants'
import {
  getActivityListRequest,
  getActivityDetailRequest
} from '@/services/activity'

const changeActivityListAction = activityList => ({
  type: actionTypes.CHANGE_ACTIVITY_LIST,
  activityList
})

const changeActivityDetail = activityDetail => ({
  type: actionTypes.CHANGE_ACTIVITY_DETAIL,
  activityDetail
})

export const getActivityListAction = () => {
  return dispatch => {
    getActivityListRequest().then(res => {
      dispatch(changeActivityListAction(res.data))
    })
  }
}

export const getActivityDetailAction = id => {
  return dispatch => {
    getActivityDetailRequest(id).then(res => {
      dispatch(changeActivityDetail(res.data))
    })
  }
}
