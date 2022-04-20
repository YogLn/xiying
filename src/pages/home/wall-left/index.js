import React, { memo } from 'react'
import { useHistory } from 'react-router'
import Ablum from '@/components/album'
import { WallWrapper, WallLeft, WallRight } from './style'

const Wall = memo(props => {
  const { title, desc, list } = props
  const history = useHistory()
  return (
    <WallWrapper>
      <WallLeft>
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
        <button
          className="btn"
          onClick={() => history.push('/ranking/work/hot')}
        >
          相册集合
        </button>
      </WallLeft>
      <WallRight>
        {list.map(item => {
          return <Ablum url={item} key={item} />
        })}
      </WallRight>
    </WallWrapper>
  )
})

export default Wall
