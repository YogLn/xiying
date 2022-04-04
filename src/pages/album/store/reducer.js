import { Map } from 'immutable'
import * as actionTypes from './constants';

const initState = Map({
  myAlbumList: [],
	albumWorks: []
})

function reducer(state = initState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_MY_ALBUM_LIST: 
			return state.set('myAlbumList', action.myAlbumList)
		case actionTypes.CHANGE_ALBUM_WORKS: 
			return state.set('albumWorks', action.albumWorks)
		default:
			return state
	}
}

export default reducer