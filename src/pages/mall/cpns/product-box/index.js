import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import { BoxWrapper } from './style'

const Box = memo(props => {
  const { content } = props
  const history = useHistory()

  const handleDetail = () => {
    const { id } = content
    history.push(`/mall/${id}`)
  }

  return (
    <BoxWrapper>
      <div className="image" onClick={() => handleDetail()}>
        <img src={content?.urls[0]} alt="" />
      </div>
      <div className="name" onClick={() => handleDetail()}>
        <span className="tag">
          <em>特价</em>
        </span>
        <span className="content">{content?.productName}</span>
      </div>
      <div className="price">￥{content?.price}</div>
    </BoxWrapper>
  )
})

export default Box
