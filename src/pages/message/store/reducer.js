import { Map } from 'immutable'
import * as actionTypes from './constants';

const initState = Map({
  chatList: [],
	currentObj: {},
	chatHistoryList: []
})

function reducer(state = initState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_CHAT_LIST:
			return state.set('chatList', action.chatList)
		case actionTypes.CHANGE_CURRENT_OBJ:
			return state.set('currentObj', action.currentObj)
		case actionTypes.CHANGE_CHAT_HISTORY_LIST:
			return state.set('chatHistoryList', action.chatHistoryList)
		default:
			return state
	}
}

export default reducer