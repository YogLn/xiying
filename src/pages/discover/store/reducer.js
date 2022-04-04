import { Map } from 'immutable'
import * as actionTypes from './constants';

const initState = Map({
  postList: [],
	total: 0,
	myPostList: [],
	currentPost: {}
})

function reducer(state = initState, action) {
  switch (action.type) {
		case actionTypes.CHANGE_POST_LIST: 
			return state.set('postList', action.postList)
		case actionTypes.CHANGE_POST_TOTAL: 
			return state.set('total', action.total)
		case actionTypes.CHANGE_POST_MY_POST_LIST: 
			return state.set('myPostList', action.myPostList)
		case actionTypes.CHANGE_CURRENT_POST: 
			return state.set('currentPost', action.currentPost)
    default:
      return state
  }
}

export default reducer
