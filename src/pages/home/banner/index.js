import React, { memo, useRef } from 'react'
import { Carousel } from 'antd'
import { HeaderWrapper } from './style'
import { carosoulList } from '@/common/local-data'

const Banner = memo(() => {
	const bannerRef = useRef()
  return (
    <HeaderWrapper>
      <div className="banner">
        <Carousel autoplay
									ref={bannerRef}>
          {carosoulList.map(item => {
            return <img src={item} key={item} className="image" alt="" />
          })}
        </Carousel>
				<button
            className="btn left"
            onClick={e => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={e => bannerRef.current.next()}
          ></button>
      </div>
      <p className="desc">
      我们创立1x的愿景是在一个地方收集世界上最好的摄影作品。在过去的十年里，我们收集了大量的艺术摄影作品。通用域名格式。我们从130个不同的国家精选了16000名已出版的艺术家。策展是我们的DNA。
      </p>
    </HeaderWrapper>
  )
})

export default Banner
