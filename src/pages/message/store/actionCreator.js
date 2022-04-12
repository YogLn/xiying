import * as actionTypes from './constants'
import { getChatListRequest } from '@/services/chat'
import { storeMessageRequest } from '@/services/message';

const changeChatHistoryList = chatHistoryList => ({
	type: actionTypes.CHANGE_CHAT_HISTORY_LIST,
	chatHistoryList
})

export const changeCurrentObjAction = currentObj => ({
	type: actionTypes.CHANGE_CURRENT_OBJ,
	currentObj
})

export const changeChatListAction = chatList =>({
	type: actionTypes.CHANGE_CHAT_LIST,
	chatList
})

export const getChatListAction = () => {
	return dispatch => {
		getChatListRequest().then(res => {
			dispatch(changeChatListAction(res.data))
		})
	}
}

export const getHistoryListAction = (id) => {
	return dispatch => {
		storeMessageRequest(id).then(res => {
			dispatch(changeChatHistoryList(res.data))
		})
	}
}