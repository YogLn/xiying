import React, { memo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { message, Image } from 'antd'
import { HeartTwoTone } from '@ant-design/icons'
import { getRankListAction } from '@/pages/ranking/store/actionCreators';
import { backTop } from '@/utils/view';
import { AlbumWrapper } from './style'

const Ablum = memo(props => {
  const { content, handleLike } = props
  const history = useHistory()
  const dispatch = useDispatch()
  const [showImg, setShowImg] = useState(false)
  const [imgUrl, setImgUrl] = useState(null)

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

  return (
    <AlbumWrapper>
      <div className="like">
        <div className="text" onClick={handleLikeClick}>
          <HeartTwoTone twoToneColor="#FF69B4" className="heart" />
          <span>{content.workLike || 0}</span>
        </div>
      </div>
      <img src={content?.workUrl} alt="" onClick={() => handlePreview()} />
      <div className="info" onClick={() => handleUserClick()}>
        <img src={content?.avatar} alt="" className="avatar" />
        <span className="username">{content?.username}</span>
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
