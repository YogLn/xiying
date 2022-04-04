import { Map } from 'immutable'
import * as actionTypes from './constants';

const initState = Map({
  favorList: [],
})

function reducer(state = initState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_FAVOR_LIST:
			return state.set('favorList', action.favorList)
		default:
			return state
	}
}

export default reducer