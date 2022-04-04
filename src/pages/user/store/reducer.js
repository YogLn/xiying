import { Map } from 'immutable'
import * as actionTypes from './constants';

const initState = Map({
  postList: [],
  albumList: [],
  userInfo: {}
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_POST_LIST:
      return state.set('postList', action.postList)
    case actionTypes.CHANGE_ALBUM_LIST:
      return state.set('albumList', action.albumList)
    case actionTypes.CHANGE_USER_INFO:
      return state.set('userInfo', action.userInfo)
    default:
      return state
  }
}

export default reducer
