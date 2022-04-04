import React, { memo, useCallback } from 'react'

import RankAlbum from '@/components/rankAlbum'
import { putWorkLikeRequest } from '@/services/rank'
import { getRankListAction } from '../store/actionCreators'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { WorkWrapper } from './style'

const Work = memo(() => {
  const dispatch = useDispatch()

  const { rankList } = useSelector(
    state => ({
      rankList: state.getIn(['rank', 'rankList'])
    }),
    shallowEqual
  )
  // 点赞
  const handleLike = useCallback(
    id => {
      putWorkLikeRequest(id)
      dispatch(getRankListAction(1, 10))
    },
    [dispatch]
  )
  return (
    <WorkWrapper>
      <div className="list">
        {rankList.map(item => {
          return (
            <RankAlbum
              key={item.rankWorkId}
              content={item}
              handleLike={handleLike}
            />
          )
        })}
      </div>
    </WorkWrapper>
  )
})

export default Work
