import React, { memo } from 'react'
import { UserInfoWrapper } from './style'

const UerInfo = memo(props => {
  const { content, rank } = props
  return (
    <UserInfoWrapper>
      <div className="avatar">
        <div className="rank">
          <span>{rank}</span>
        </div>
        <img src={content.avatar} alt="" />
      </div>
      <hr />
      <div className="username">{content.username}</div>
    </UserInfoWrapper>
  )
})

export default UerInfo
