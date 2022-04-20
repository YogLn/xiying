import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getCaramelListAction } from './store/actionCreator'
import Banner from './cpns/banner'
import ProductBox from './cpns/product-box'
import { OrderWrapper } from './style'

const Order = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCaramelListAction(0)) // 相机
    dispatch(getCaramelListAction(1)) // 照片
    dispatch(getCaramelListAction(2)) // 教程
  }, [dispatch])

  const { caramelList } = useSelector(
    state => ({
      caramelList: state.getIn(['mall', 'caramelList'])
    }),
    shallowEqual
  )
  return (
    <OrderWrapper>
      <Banner />
      <div className="list">
        {caramelList.map(item => {
          return <ProductBox key={item.id} content={item} />
        })}
      </div>
    </OrderWrapper>
  )
})

export default Order
