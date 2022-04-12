import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'

import { UserInfoWrapper } from './style'

const UerInfo = memo(props => {
  const { content, rank } = props
  const history = useHistory()

  const handleUserClick = () => {
    history.push(`/user/${content.id}`)
  }
  
  return (
    <UserInfoWrapper>
      <div onClick={handleUserClick}>
        <div className="avatar">
          <div className="rank">
            <span>{rank}</span>
          </div>
          <img src={content.avatar} alt="" />
        </div>
        <hr />
        <div className="username">{content.username}</div>
      </div>
    </UserInfoWrapper>
  )
})

export default UerInfo
