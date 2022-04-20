import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import { HeartTwoTone } from '@ant-design/icons'
import { UserInfoWrapper } from './style'

const UerInfo = memo(props => {
  const { content, rank } = props
  const history = useHistory()

  const handleUserClick = () => {
    history.push(`/user/${content.id}`)
  }

  return (
    <UserInfoWrapper>
      <div className="avatar" onClick={handleUserClick}>
        <div className="rank">
          <span>{rank}</span>
        </div>
        <img src={content.avatar} alt="" />
      </div>
      <div className="username" onClick={handleUserClick}>
        {content.username}
      </div>
      <div className="like">
        <HeartTwoTone twoToneColor="#ff0000" />
        <span>{content.likeNum}</span>
      </div>
    </UserInfoWrapper>
  )
})

export default UerInfo
