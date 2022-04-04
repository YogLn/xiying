import React, { memo, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Popconfirm, message, Divider } from 'antd'
import {
  LikeTwoTone,
  DislikeTwoTone,
  MessageTwoTone,
  ClockCircleOutlined,
  LikeOutlined
} from '@ant-design/icons'
import PostImg from '../post-img'
import Comment from '../comment'

import {
  getPostListAction,
  getMyPostListAction,
  getCurrentPost
} from '@/pages/discover/store/actionCreators'
import { formatUtcString } from '@/utils/format'
import { backTop } from '@/utils/view'
import {
  deletePostRequest,
  postLikeRequest,
  postCancelLikeRequest,
  getLikeStatusRequest
} from '@/services/post'
import { PostBoxWrapper } from './style'

const PostBox = memo(props => {
  const { content, showComment = false } = props
  const [isLike, setIsLike] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  console.log(content);
  const avatar = content?.avatar || ''
  const username = content?.username || '匿名用户'
  const loginUsername = window.localStorage.getItem('username')
  const id = window.localStorage.getItem('id')

  useEffect(() => {
    if (showComment && content.postId) {
      getLikeStatusRequest(content.postId).then(res => {
        setIsLike(res.data)
      })
    }
    if(!showComment) {
      setIsLike(content.likeStatus)
    }
  }, [showComment, content.postId, content.likeStatus])

  const handleComment = postId => {
    if (showComment) return
    history.push(`/detail/${postId}`)
    backTop()
  }

  const confirm = async () => {
    const res = await deletePostRequest(content.postId)
    if (res.code === 200) {
      message.success('删除成功~')
      dispatch(getPostListAction(1, 5))
      dispatch(getMyPostListAction(id))
    }
  }

  const handleLikeClick = async ({ postId }) => {
    if (isLike) {
      await postCancelLikeRequest({ postId })
      dispatch(getPostListAction(1, 5))
      dispatch(getCurrentPost(postId))
      setIsLike(false)
    } else {
      await postLikeRequest({ postId })
      dispatch(getPostListAction(1, 5))
      dispatch(getCurrentPost(postId))
      setIsLike(true)
    }
  }

  const handleUserClick = () => {
    history.push(`/user/${content.userId}`)
    backTop()
  }

  return (
    <PostBoxWrapper>
      <div className="top">
        <div className="user" onClick={() => handleUserClick()}>
          <img src={avatar} alt="" className="avatar" />
          <span className="username">{content?.username || username}</span>
        </div>
        <div className="time">
          <ClockCircleOutlined />
          <span className="text">{formatUtcString(content?.created)}</span>
          {loginUsername === username ? (
            <Popconfirm
              title="确认删除这条帖子吗？"
              onConfirm={confirm}
              okText="确认"
              cancelText="取消"
            >
              <span className="delete">删除</span>
            </Popconfirm>
          ) : null}
        </div>
      </div>
      <Divider />
      <div className="center">
        <p className="content">{content?.title}</p>
        {content?.urls?.length && <PostImg list={content.urls} />}
        {content?.urls?.length && <Divider />}
      </div>
      <div className="footer">
        <div className="like" onClick={() => handleLikeClick(content)}>
          {isLike ? <LikeTwoTone twoToneColor="#52c41a" /> : <LikeOutlined />}
          <span>{content.likeNum}</span>
        </div>
        <div className="comment" onClick={() => handleComment(content?.postId)}>
          <MessageTwoTone twoToneColor="#52c41a" />
          <span>{content.commentNum}</span>
        </div>
        <div className="dislike">
          <DislikeTwoTone twoToneColor="#52c41a" />
        </div>
      </div>
      {showComment && (
        <div className="comment">
          <Divider />
          <Comment content={content} />
        </div>
      )}
    </PostBoxWrapper>
  )
})

export default PostBox