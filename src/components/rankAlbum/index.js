import React, { memo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { message, Image, Popconfirm } from 'antd'
import { HeartTwoTone, DeleteTwoTone } from '@ant-design/icons'
import { getRankListAction } from '@/pages/ranking/store/actionCreators'
import { backTop } from '@/utils/view'
import { deleteWorkRequest } from '@/services/rank'
import { AlbumWrapper } from './style'

const Ablum = memo(props => {
  const { content, handleLike } = props
  const history = useHistory()
  const dispatch = useDispatch()
  const [showImg, setShowImg] = useState(false)
  const [imgUrl, setImgUrl] = useState(null)
  const id = parseInt(window.localStorage.getItem('id'))

  const handleLikeClick = () => {
    const token = window.localStorage.getItem('token')

    if (!token) {
      return message.error('您还没有登录~')
    }
    let isLike = window.sessionStorage.getItem(content.rankWorkId)
    if (isLike) return
    handleLike(content.rankWorkId)
    dispatch(getRankListAction(1, 10))
    window.sessionStorage.setItem(content.rankWorkId, true)
  }

  const handlePreview = () => {
    setShowImg(true)
    setImgUrl(content.workUrl)
  }

  const handleUserClick = () => {
    backTop()
    history.push(`/user/${content.userId}`)
  }

  // 删除作品
  const confirm = async () => {
    const res = await deleteWorkRequest(content.rankWorkId)
    if (res.code === 200) {
      message.success('删除成功~')
      dispatch(getRankListAction(1, 10))
    }
  }

  return (
    <AlbumWrapper>
      <img src={content?.workUrl} alt="" onClick={() => handlePreview()} />
      <div className="footer">
        <div className="info" onClick={() => handleUserClick()}>
          <img src={content?.userVo?.avatar} alt="" className="avatar" />
          <span className="username">{content?.userVo?.username}</span>
        </div>
        {id === content.userId ? (
          <div className="delete">
            <Popconfirm
              title="确认删除吗？"
              onConfirm={confirm}
              okText="确认"
              cancelText="取消"
            >
              <span className="delete">
                <DeleteTwoTone twoToneColor="#ff0000" />
              </span>
            </Popconfirm>
          </div>
        ) : null}
        <div className="like">
          <div className="text" onClick={handleLikeClick}>
            <HeartTwoTone twoToneColor="#FF69B4" className="heart" />
            <span>{content.workLike || 0}</span>
          </div>
        </div>
      </div>
      {showImg && (
        <Image
          width={200}
          src={imgUrl}
          preview={{
            visible: showImg,
            onVisibleChange: value => {
              setShowImg(value)
            }
          }}
        />
      )}
    </AlbumWrapper>
  )
})

export default Ablum
