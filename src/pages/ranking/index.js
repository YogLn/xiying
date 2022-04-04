import React, { memo, useEffect, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRankListAction } from './store/actionCreators'
import { renderRoutes } from 'react-router-config'

import TopHeader from './header'

import { windowScroll } from '@/utils/view'
import { RankingWrapper } from './style'
import { Divider } from 'antd'

const Ranking = memo((props) => {
  const { routes } = props.route
  const [page] = useState(1)
  const [size, setSize] = useState(10)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRankListAction(page, size))
  }, [dispatch, page, size])
  
  // 加载更多
  const loadMore = useCallback(() => {
    setSize(size + 10)
    dispatch(getRankListAction(page, size))
  }, [dispatch, size, page])
  windowScroll(loadMore)

  return (
    <RankingWrapper>
      <TopHeader />
      <Divider />
      {renderRoutes(routes)}
    </RankingWrapper>
  )
})

export default Ranking
