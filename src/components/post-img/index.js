import React, { memo, useState } from 'react'
import { Image } from 'antd'
import { PostImgWrapper } from './style'

const PostImg = memo(props => {
  const { list = [] } = props
  const [imageUrl, setImageUrl] = useState(null)
  const [showImg, setShowImg] = useState(false)

  let width = '40%'
  if (list?.length === 3 || list?.length >= 6) {
    width = '30%'
  }

  const handlePreView = (item) => {
    setImageUrl(item)
    setShowImg(true)
  }
  
  const onVisibleChange = visible => {
    setShowImg(visible)
  }

  return (
    <PostImgWrapper width={width}>
      {list?.map(item => {
        return item && <img src={item} key={item} alt="" onClick={e => handlePreView(item)}/>
      })}
      {showImg && list.length && (
        <Image
          src={imageUrl}
          className="antd-image"
          preview={{ visible: showImg, onVisibleChange: onVisibleChange }}
        />
      )}
    </PostImgWrapper>
  )
})

export default PostImg
