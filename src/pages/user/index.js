import React, { memo, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { message } from 'antd'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Tabs } from 'antd'
import PostBox from '@/components/post-box'
import Album from '@/components/album2'
import {
  getPostListByIdAction,
  getUserAlbumAction,
  getUserInfoAction
} from './store/actionCreators'
import { UserWrapper } from './style'

const UserInfo = memo(props => {
  const userId = props.match.params.id
  const history = useHistory()
  const { TabPane } = Tabs
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPostListByIdAction(userId))
    dispatch(getUserInfoAction(userId))
    dispatch(getUserAlbumAction(userId))
  }, [userId, dispatch])

  const { userInfo, postList, albumList } = useSelector(
    state => ({
      userInfo: state.getIn(['user', 'userInfo']),
      postList: state.getIn(['user', 'postList']),
      albumList: state.getIn(['user', 'albumList']),
    }),
    shallowEqual
  )
  const handleMessage = () => {
    const token = window.localStorage.getItem('token')
    if(!token) {
      return message.info('您还没有登录，快去登录吧~')
    }
    history.push({pathname:'/message', state: userInfo})
  }
  return (
    <UserWrapper>
      <div className="info">
        <div className="left">
          <img src={userInfo?.avatar} alt="" />
        </div>
        <div className="right">
          <div className="name">{userInfo?.username}</div>
          <div className="info-detail">
            <div className="age">年龄：{userInfo?.age}</div>
            <div className="sex">性别：{userInfo?.sex === 1 ? '男' : '女'}</div>
            <div className="phone">联系方式：{userInfo?.phone}</div>
          </div>
          <div className="message" onClick={() => handleMessage()}>私信</div>
        </div>
      </div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="TA的帖子" key="1">
          <div className="post">
            {postList?.map(item => {
              return <PostBox key={item.postId} content={item} />
            })}
          </div>
        </TabPane>
        <TabPane tab="TA的相册" key="2">
          <div className="album">
            {albumList.length === 0 ? (
              <div className="none">相册列表为空~</div>
            ) : (
              albumList.map(item => {
                return (
                  <div className="item" key={item.albumId}>
                    <Album
                      url={item.cover}
                      albumId={item.albumId}
                      width="200px"
                      content={item}
                      showDelete={false}
                    />
                  </div>
                )
              })
            )}
          </div>
        </TabPane>
      </Tabs>
    </UserWrapper>
  )
})

export default UserInfo
