import * as actionTypes from './constants'
import { getRankListRequest, getUserListRequest } from '@/services/rank';

const changeRankListAction = rankList => ({
	type: actionTypes.CHANGE_RANK_LIST,
	rankList
})

const changeUserListAction = userList => ({
	type: actionTypes.CHANGE_USER_LIST,
	userList
})

const changeTotalAction = total => ({
	type: actionTypes.CHANGE_RANK_TOTAL,
	total
})

export const getRankListAction = (pageNow = 1, pageSize=10) => {
	return dispatch => {
		getRankListRequest(pageNow, pageSize).then(res => {
			dispatch(changeRankListAction(res.data.list))
			dispatch(changeTotalAction(res.data.total))
		})
	}
}
export const getUserListAction = (pageNow = 1, pageSize=10) => {
	return dispatch => {
		getUserListRequest(pageNow, pageSize).then(res => {
			dispatch(changeUserListAction(res.data.list))
		})
	}
}