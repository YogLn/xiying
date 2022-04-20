import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import TopHeader from './header'

import { RankingWrapper } from './style'
import { Divider } from 'antd'

const Ranking = memo(props => {
  const { routes } = props.route

  return (
    <RankingWrapper>
      <TopHeader />
      <Divider />
      {renderRoutes(routes)}
    </RankingWrapper>
  )
})

export default Ranking
