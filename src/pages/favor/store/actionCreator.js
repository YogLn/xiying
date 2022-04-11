import * as actionTypes from './constants'
import { getFavorListRequestWithLogin } from '@/services/post'

const changeFavorListAction = favorList => ({
	type: actionTypes.CHANGE_FAVOR_LIST,
	favorList
})

export const getMyFavorListAction = (id) => {
	return dispatch => {
		getFavorListRequestWithLogin(id).then(res => {
			dispatch(changeFavorListAction(res.data))
		})
	}
}