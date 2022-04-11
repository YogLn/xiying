import * as actionTypes from './constants'
import { getChatListRequest } from '@/services/chat'
import { storeMessageRequest } from '@/services/message';


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

export const getHistoryListAction = () => {
	return dispatch => {
		storeMessageRequest().then(res => {
			console.log(res);
			// dispatch(changeChatListAction(res.data))
		})
	}
}