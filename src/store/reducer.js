import { combineReducers } from 'redux-immutable'

import { reducer as postReducer } from '@/pages/discover/store';
import { reducer as albumReducer } from '@/pages/album/store';
import { reducer as rankReducer } from '@/pages/ranking/store';
import { reducer as userReducer } from '@/pages/user/store';

const reducer = combineReducers({
	post: postReducer,
	album: albumReducer,
	rank: rankReducer,
	user: userReducer
})

export default reducer