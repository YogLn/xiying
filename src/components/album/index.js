import React, { memo } from 'react'
import { AlbumWrapper } from './style'

const Ablum = memo(props => {
  const { url } = props
  return (
    <AlbumWrapper>
      <img src={url} alt="" />
    </AlbumWrapper>
  )
})

export default Ablum
