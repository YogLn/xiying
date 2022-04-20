import React, { memo, useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Carousel, notification } from 'antd'
import { getProductDetailAction } from '../store/actionCreator'
import SharePng from '@/assets/img/share.png'
import AR from '@/assets/img/ar.png'
import { buyProductReq } from '@/services/mall'
import { DetailWrapper } from './style'

const Detail = memo(props => {
  const id = props.match.params.id

  const dispatch = useDispatch()
  const history = useHistory()

  const [num, setNum] = useState(1)

  useEffect(() => {
    dispatch(getProductDetailAction(id))
  }, [id, dispatch])
  const { currentPro } = useSelector(
    state => ({
      currentPro: state.getIn(['mall', 'currentPro'])
    }),
    shallowEqual
  )
  const changeNum = tag => {
    if (tag === '-') {
      if (num === 1) return
      setNum(num - 1)
    } else {
      setNum(num + 1)
    }
  }

  const handleBuy = async () => {
    const res = await buyProductReq({
      productId: id,
      productNum: num
    })
    console.log(res)
    if (res.code === 200) {
      notification.success({
        message: '购买成功'
      })
    }
  }
  return (
    <DetailWrapper>
      <div className="header">
        <div className="home">
          <div className="home-name" onClick={() => history.push('/mall')}>
            首页
          </div>
          <div className="name">
            <img src={AR} alt="" />
            {currentPro.productName}
          </div>
        </div>

        <div className="share">
          <img src={SharePng} alt="" />
          <span>分享</span>
        </div>
      </div>
      <hr />
      <div className="info">
        <div className="banner">
          <Carousel autoplay>
            {currentPro?.urls?.map(item => {
              return <img src={item} alt="" key={item} />
            })}
          </Carousel>
        </div>
        <div className="buy">
          <div className="name">{currentPro.productName}</div>
          <div className="desc">{currentPro.productDescription}</div>
          <div className="price">￥{currentPro.price}</div>
          <div className="num">
            数量：
            <div className="btn" onClick={() => changeNum('-')}>
              -
            </div>
            <div className="number">{num}</div>
            <div className="btn" onClick={() => changeNum('+')}>
              +
            </div>
          </div>
          <div className="serve">服务：满119包邮 商家发货</div>
          <div className="stock">库存：{currentPro.stock}</div>
          <div className="btn-ctl">
            <div className="buy" onClick={() => handleBuy()}>
              立即购买
            </div>
            <div className="add-shop-cart">加入购物车</div>
          </div>
        </div>
      </div>
      <div className="detail"></div>
    </DetailWrapper>
  )
})

export default Detail
