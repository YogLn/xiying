import React, { memo, useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Carousel, notification } from 'antd'
import { getProductDetailAction } from '../store/actionCreator'
import SharePng from '@/assets/img/share.png'
import AR from '@/assets/img/ar.png'
import { buyProductReq, addShopCartReq } from '@/services/mall'
import { DetailWrapper } from './style'

const Detail = memo(props => {
  const id = props.match.params.id

  const dispatch = useDispatch()
  const history = useHistory()

  const [num, setNum] = useState(1)
  const coin = window.localStorage.getItem('coin')
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
      if (num === currentPro.stock) return
      setNum(num + 1)
    }
  }

  const handleBuy = async () => {
    const res = await buyProductReq({
      productId: parseInt(id),
      productNum: num
    })
    if (res.code === 200) {
      notification.success({
        message: '购买成功'
      })
      window.localStorage.setItem('coin', coin - num * currentPro.price)
    } else {
      notification.error({
        message: '购买失败',
        description: '余额不足'
      })
    }
  }
  const handleAddShopCart = async () => {
    const res = await addShopCartReq({
      amount: num,
      productId: id,
      totalPrice: currentPro.price * num
    })
    if (res.code === 200) {
      notification.success({
        message: '已加入购物车'
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
          <div className="all-price">总计：￥{currentPro.price * num}</div>
          <div className="btn-ctl">
            <div className="buy" onClick={() => handleBuy()}>
              立即购买
            </div>
            <div className="add-shop-cart" onClick={() => handleAddShopCart()}>
              加入购物车
            </div>
          </div>
        </div>
      </div>
      <div className="detail"></div>
    </DetailWrapper>
  )
})

export default Detail
