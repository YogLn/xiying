import React, { memo, useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import RankAlbum from '@/components/rankAlbum'
import { putWorkLikeRequest } from '@/services/rank'
import { getRankListAction } from '../store/actionCreators'
import { windowScroll } from '@/utils/view'
import { WorkWrapper } from './style'

const Work = memo(() => {
  const dispatch = useDispatch()
  const [page] = useState(1)
  const [size, setSize] = useState(10)
  useEffect(() => {
    dispatch(getRankListAction(page, size))
  }, [dispatch, page, size])

  // 加载更多
  const loadMore = useCallback(() => {
    setSize(size + 10)
    dispatch(getRankListAction(page, size))
  }, [dispatch, size, page])

  windowScroll(loadMore)

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
        {rankList?.map(item => {
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
