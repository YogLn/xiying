import * as actionTypes from './constants'
import {
  getActivityListRequest,
  getActivityDetailRequest,
  getActivityWorkListRequest
} from '@/services/activity'

const changeActivityListAction = activityList => ({
  type: actionTypes.CHANGE_ACTIVITY_LIST,
  activityList
})

const changeActivityDetail = activityDetail => ({
  type: actionTypes.CHANGE_ACTIVITY_DETAIL,
  activityDetail
})
const changeActivityWorkList = activityWorkList => ({
  type: actionTypes.CHANGE_ACTIVITY_WORK_LIST,
  activityWorkList
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

export const getActivityWorkListAction = id => {
  return dispatch => {
    getActivityWorkListRequest(id).then(res => {
      dispatch(changeActivityWorkList(res.data))
    })
  }
}
