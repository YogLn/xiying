import { Map } from 'immutable'
import * as actionTypes from './constants';

const initState = Map({
  rankList: [],
  userList: [],
  total: 0
})

function reducer(state = initState, action) {
  switch (action.type) {
		case actionTypes.CHANGE_RANK_LIST: 
			return state.set('rankList', action.rankList)
    case actionTypes.CHANGE_RANK_TOTAL:
      return state.set('total', action.total)
    case actionTypes.CHANGE_USER_LIST:
      return state.set('userList', action.userList)
    default:
      return state
  }
}

export default reducer
