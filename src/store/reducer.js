import { combineReducers } from 'redux-immutable'

import { reducer as postReducer } from '@/pages/discover/store';
import { reducer as albumReducer } from '@/pages/album/store';
import { reducer as rankReducer } from '@/pages/ranking/store';
import { reducer as userReducer } from '@/pages/user/store';
import { reducer as activityReducer } from '@/pages/activity/store';
import { reducer as favorReducer } from '@/pages/favor/store';
import { reducer as chatReducer } from '@/pages/message/store';

const reducer = combineReducers({
	post: postReducer,
	album: albumReducer,
	rank: rankReducer,
	user: userReducer,
	activity: activityReducer,
	favor: favorReducer,
	chat: chatReducer
})

export default reducer