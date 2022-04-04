import { Map } from 'immutable'
import * as actionTypes from './constants';

const initState = Map({
  activityList: [],
	activityDetail: {}
})

function reducer(state = initState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_ACTIVITY_LIST:
			return state.set('activityList', action.activityList)
		case actionTypes.CHANGE_ACTIVITY_DETAIL:
			return state.set('activityDetail', action.activityDetail)
		default:
			return state
	}
}
export default reducer