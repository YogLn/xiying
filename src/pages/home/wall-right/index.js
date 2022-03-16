import React, { memo } from 'react'
import Ablum from '@/components/album2'
import { WallWrapper, WallLeft, WallRight } from './style'

const Wall = memo(props => {
  const { title, desc, list } = props
  return (
    <WallWrapper>
      <WallRight>
        {list.map(item => {
          return <Ablum url={item} />
        })}
      </WallRight>
      <WallLeft>
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
        <button className="btn">相册集合</button>
      </WallLeft>
    </WallWrapper>
  )
})

export default Wall
