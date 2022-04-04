import React, { memo, createElement, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Comment, List, Tooltip, Button, Input, message, Modal } from 'antd'
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
  DeleteOutlined,
  DeleteFilled
} from '@ant-design/icons'
import { formatUtcString } from '@/utils/format'
import { getCurrentPost } from '@/pages/discover/store/actionCreators'
import { addCommentRequest, deleteCommentRequest } from '@/services/post'
import { CommentWrapper } from './style'

const PostComment = memo(props => {
  const { content } = props
  const [curName, setCurName] = useState('')
  const { postId } = content
  const { TextArea } = Input
  const dispatch = useDispatch()
  // 添加评论
  const [commentValue, setCommentValue] = useState(null)
  const comments = content?.comments

  // 回复评论相关
  const [commentId, setCommentId] = useState(0)
  const [replayValue, setReplayValue] = useState(null)
  const [replayVisible, setReplayVisible] = useState(false)

  // 删除评论
  const username = window.localStorage.getItem('username')

  const defaultAvatarUrl =
    'https://cdn.learnku.com/uploads/images/201710/30/1/TrJS40Ey5k.png'

  const handleLike = item => {
    console.log(item)
  }

  const handleDislike = item => {
    console.log(item)
  }

  const handleDelete = async item => {
    if (username !== item.username) {
      return message.info('您无权删除别人的评论~')
    }
    console.log(item);
    const res = await deleteCommentRequest({commentId: item.commentId, postId: item.postId})
    if(res.code === 200) {
      message.success('删除成功~')
      dispatch(getCurrentPost(postId))
    }
  }

  const handleShowReplay = item => {
    setCurName(item.username)
    setCommentId(item.commentId)
    setReplayVisible(true)
  }

  const handleReplay = async () => {
    try {
      let token = window.localStorage.getItem('token')
      if (token) {
        await addCommentRequest({
          postId,
          replyId: commentId,
          text: replayValue
        })
        setReplayValue('')
        setReplayVisible(false)
        dispatch(getCurrentPost(postId))
        message.success('评论成功~')
      } else {
        throw new Error('未登录')
      }
    } catch (error) {
      message.info('您还没有登录，快去登录吧~')
    }
  }

  // 添加评价
  const handleSubmit = async () => {
    try {
      const token = window.localStorage.getItem('token')
      if (token) {
        const res = await addCommentRequest({
          postId,
          text: commentValue
        })
        if (res.code === 200) {
          setCommentValue(null)
          dispatch(getCurrentPost(postId))
          message.success('评论成功~')
        }
      } else {
        throw new Error('未登录')
      }
    } catch (error) {
      message.info('您还没有登录，快去登录吧~')
    }
  }

  // action组件
  const actions = item => [
    <Tooltip key="comment-basic-like" title="赞">
      <span onClick={e => handleLike(item)}>
        {createElement(item.action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{item.likeNum}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="踩">
      <span onClick={e => handleDislike(item)}>
        {React.createElement(
          item.action === 'disliked' ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{item.dislikeNum}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-delete" title="删除">
      <span onClick={e => handleDelete(item)}>
        {React.createElement(
          item.action === 'delete' ? DeleteFilled : DeleteOutlined
        )}
        <span className="comment-action">{item.dislikeNum}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to" onClick={e => handleShowReplay(item)}>
      回复
    </span>
  ]

  // 评论组件
  const ExampleComment = ({ children, item }) => {
    return (
      <Comment
        author={item?.username}
        avatar={item?.avatar || defaultAvatarUrl}
        content={item?.text}
        datetime={formatUtcString(item?.created)}
        actions={actions(item)}
      >
        {children}
      </Comment>
    )
  }
  return (
    <CommentWrapper>
      <TextArea
        rows={4}
        onChange={e => setCommentValue(e.target.value)}
        value={commentValue}
      />
      <Button onClick={e => handleSubmit()} type="primary" className="submit">
        添加评论
      </Button>
      <List
        className="comment-list"
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={item => (
          <li>
            <ExampleComment item={item}>
              {item.subComments.length && (
                <List
                  itemLayout="horizontal"
                  dataSource={item.subComments}
                  renderItem={item => (
                    <li>
                      <ExampleComment item={item} />
                    </li>
                  )}
                />
              )}
            </ExampleComment>
          </li>
        )}
      />
      {/* 回复评论 */}
      <Modal
        title={'回复' + curName + '的评论'}
        visible={replayVisible}
        onOk={e => handleReplay()}
        onCancel={() => setReplayVisible(false)}
        okText="确认"
        cancelText="取消"
      >
        <TextArea
          rows={4}
          onChange={e => setReplayValue(e.target.value)}
          value={replayValue}
        />
      </Modal>
    </CommentWrapper>
  )
})

export default PostComment
