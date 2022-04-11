import { Map } from 'immutable'
import * as actionTypes from './constants';

const initState = Map({
  chatList: [],
})

function reducer(state = initState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_CHAT_LIST:
			return state.set('chatList', action.chatList)
		default:
			return state
	}
}

export default reducer