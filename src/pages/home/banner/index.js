import React, { memo, useRef, useEffect } from 'react'
import { Carousel } from 'antd'
import { HeaderWrapper } from './style'
import Typed from 'typed.js'
import { carosoulList } from '@/common/local-data'

const Banner = memo(() => {
  const bannerRef = useRef()
  let elRef = useRef()
  useEffect(() => {
    const options = {
      strings: [
        `摄影适时而生，凭借一腔热血参与到艺术领域，以一己之力在艺术界打拼出众多令人耳目一新的表现途径。 与其他艺术形式比较，每一次科技进步与创新，每一次社会变革与发展，
        都能推动摄影在表现形式和内容上发生明显改变。我们创立西影的愿景是在一个地方收集世界上最好的摄影作品，在过去的十年里，我们收集了大量的艺术摄影作品。`
      ],
      typeSpeed: 50,
      backSpeed: 50
    }
    new Typed(elRef.current, options)
  }, [])

  return (
    <HeaderWrapper>
      <div className="banner">
        <Carousel autoplay ref={bannerRef}>
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
      <div className="type-wrap">
        <p className="desc" style={{ whiteSpace: 'pre' }} ref={elRef}></p>
      </div>
    </HeaderWrapper>
  )
})

export default Banner
