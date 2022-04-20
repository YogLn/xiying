import React, { memo, useCallback, useEffect, useState } from 'react'

import RankAlbum from '@/components/rankAlbum'
import { putWorkLikeRequest } from '@/services/rank'
import { getNewRankListAction } from '../store/actionCreators'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { windowScroll } from '@/utils/view'
import { WorkWrapper } from './style'

const Work = memo(() => {
  const dispatch = useDispatch()
  const [page] = useState(1)
  const [size, setSize] = useState(10)

  useEffect(() => {
    dispatch(getNewRankListAction(page, size))
  }, [dispatch, page, size])

  // 加载更多
  const loadMore = useCallback(() => {
    setSize(size + 10)
    dispatch(getNewRankListAction(page, size))
  }, [dispatch, size, page])
  windowScroll(loadMore)

  const { newList } = useSelector(
    state => ({
      newList: state.getIn(['rank', 'newList'])
    }),
    shallowEqual
  )
  // 点赞
  const handleLike = useCallback(
    id => {
      putWorkLikeRequest(id)
      dispatch(getNewRankListAction(1, 10))
    },
    [dispatch]
  )
  return (
    <WorkWrapper>
      <div className="list">
        {newList?.map(item => {
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
