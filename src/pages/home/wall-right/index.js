import React, { memo } from 'react'
import Ablum from '@/components/album2'
import { useHistory } from 'react-router';
import { WallWrapper, WallLeft, WallRight } from './style'

const Wall = memo(props => {
  const { title, desc, list } = props
  const history = useHistory()
  return (
    <WallWrapper>
      <WallRight>
        {list.map(item => {
          return <Ablum url={item} key={item}/>
        })}
      </WallRight>
      <WallLeft>
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
        <button className="btn" onClick={() => history.push('/ranking/work')}>相册集合</button>
      </WallLeft>
    </WallWrapper>
  )
})

export default Wall
