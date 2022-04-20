import * as actionTypes from './constants'
import { getMyAlbumRequest, getAlbumWorksRequest } from '@/services/album'

const changeMyAlbumListAction = myAlbumList => ({
  type: actionTypes.CHANGE_MY_ALBUM_LIST,
  myAlbumList
})

const changeAlbumWorks = albumWorks => ({
  type: actionTypes.CHANGE_ALBUM_WORKS,
  albumWorks
})

export const getMyAlbumListAction = () => {
  return dispatch => {
    getMyAlbumRequest().then(res => {
      dispatch(changeMyAlbumListAction(res.data))
    })
  }
}
export const getAlbumWorksAction = id => {
  return dispatch => {
    getAlbumWorksRequest(id).then(res => {
      dispatch(changeAlbumWorks(res.data))
    })
  }
}
