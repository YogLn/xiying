import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Popconfirm, message } from 'antd'
import { DeleteTwoTone, EyeInvisibleOutlined } from '@ant-design/icons'
import { getAlbumWorksAction } from '@/pages/album/store/actionCreator'
import { AlbumWrapper } from './style'
import { backTop } from '@/utils/view'

const Ablum = memo(props => {
  const dispatch = useDispatch()
  const history = useHistory()
  const {
    url,
    width = '18.75rem',
    content = '',
    showDelete,
    handleDeleteAlbum,
    userId = window.localStorage.getItem('id')
  } = props
  const handleCoverClick = () => {
    const token = window.localStorage.getItem('token')
    if (!token) {
      return message.info('您还没有登录，快去登录吧~')
    }
    dispatch(getAlbumWorksAction(content.albumId))
    backTop()
    history.push({ pathname: `/photo/${content.albumId}`, state: userId })
  }
  const handleDelete = () => {
    handleDeleteAlbum(content.albumId)
  }
  return (
    <AlbumWrapper width={width}>
      {content?.isPrivate === 1 && (
        <div className="private">
          <EyeInvisibleOutlined />
        </div>
      )}
      {showDelete && (
        <Popconfirm
          title="确认删除该相册吗？"
          onConfirm={handleDelete}
          okText="确认"
          cancelText="取消"
        >
          <div className="delete">
            <DeleteTwoTone twoToneColor="#ff0000" />
          </div>
        </Popconfirm>
      )}
      <img src={url} alt="" onClick={() => handleCoverClick()} />
      <div className="name" onClick={() => handleCoverClick()}>
        {content.albumName}
      </div>
    </AlbumWrapper>
  )
})

export default Ablum
