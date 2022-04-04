import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'

import { Divider, message } from 'antd'
import { backTop } from '@/utils/view';
import {
  SmileTwoTone,
  HeartTwoTone,
  FileImageTwoTone,
  CustomerServiceTwoTone,
  ClockCircleTwoTone
} from '@ant-design/icons'
import { RIghtListWrapper } from './style'

const RightList = memo(() => {
  const history = useHistory()
  const username = window.localStorage.getItem('username')
  const avatar = window.localStorage.getItem('avatar')

  const handleTabClick = tag => {
    const token = window.localStorage.getItem('token')
    if(!token) {
      return message.error('您还没有登录~')
    }
    switch (tag) {
      case 'moment':
        history.push('/moment')
        break
      case 'my':
        history.push('/my')
        break
      case 'favor':
        history.push('/favor')
        break
      case 'album':
        history.push('/album')
        break
      case 'help':
        console.log('help')
        break
      default:
        break
    }
    backTop()
  }

  const getMyPage = () => {
    const id = window.localStorage.getItem('id')
    history.push(`user/${id}`)
  }

  return (
    <RIghtListWrapper>
      {username && avatar ? (
        <div className="info" onClick={() => getMyPage()}>
          <img src={avatar} alt="" />
          <div className="username">{username}</div>
        </div>
      ) : (
        <div className="not-login">未登录</div>
      )}
      <Divider />
      <div className="list">
        <div className="moment" onClick={e => handleTabClick('moment')}>
          <SmileTwoTone />
          <span>发布动态</span>
        </div>
        <Divider />
        <div className="moment" onClick={e => handleTabClick('my')}>
          <ClockCircleTwoTone twoToneColor="#936A61" />
          <span>我的动态</span>
        </div>
        <Divider />
        <div className="favor" onClick={e => handleTabClick('favor')}>
          <HeartTwoTone twoToneColor="#eb2f96" />
          <span>我的收藏</span>
        </div>
        <Divider />
        <div className="album" onClick={e => handleTabClick('album')}>
          <FileImageTwoTone twoToneColor="#52c41a" />
          <span>我的相册</span>
        </div>
        <Divider />
        <div className="help" onClick={e => handleTabClick('help')}>
          <CustomerServiceTwoTone twoToneColor="#C77F43" />
          <span>客户帮助</span>
        </div>
      </div>
    </RIghtListWrapper>
  )
})

export default RightList
