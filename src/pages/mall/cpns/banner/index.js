import React, { memo, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Carousel } from 'antd'
import { mallBanner } from '@/common/local-data'
import { BannerWrapper } from './style'
const Mall = memo(() => {
  const bannerRef = useRef()
  const history = useHistory()
  return (
    <BannerWrapper>
      <div className="banner">
        <Carousel autoplay ref={bannerRef}>
          {mallBanner.map(item => {
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
      <div className="list">
        <div className="item">
          <img
            src="https://p3.music.126.net/UKhDHWnEMmoOo27PQmDPbA==/19117208672446378.jpg"
            alt=""
          />
          <span>热销爆品</span>
        </div>
        <em className="line"></em>
        <div className="item" onClick={() => history.push('/shopcart')}>
          <img
            src="https://p4.music.126.net/tKMAm5OvR-2lAj7dnEOhsg==/18623527952924939.jpg"
            alt=""
          />
          <span>购物车</span>
        </div>
        <em className="line"></em>
        <div className="item">
          <img
            src="https://p3.music.126.net/PzH4QQKE5R97J9f2V-SvqQ==/18585045045959929.jpg"
            alt=""
          />
          <span>数码影音</span>
        </div>
        <em className="line"></em>
        <div className="item">
          <img
            src="https://s2.music.126.net/store/web/img/jifen.png?57df5ab619cb90796b174db90d320cc4"
            alt=""
          />
          <span>云贝商城</span>
        </div>
      </div>
    </BannerWrapper>
  )
})

export default Mall
