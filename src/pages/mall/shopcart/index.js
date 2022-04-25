import React, { memo, useEffect, useState } from 'react'
import { Button, Table, message, Popconfirm, Image, notification } from 'antd'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getShopCartListAction } from '../store/actionCreator'
import { removeShopCartReq, buyProductReq } from '@/services/mall'
import { CartWrapper } from './style'

const ShopCart = memo(() => {
  const dispatch = useDispatch()
  const coin = window.localStorage.getItem('coin')
  const [num, setNum] = useState(0)
  const [flag, setFlag] = useState(true)
  useEffect(() => {
    dispatch(getShopCartListAction())
  }, [dispatch])

  const { shopCart } = useSelector(
    state => ({
      shopCart: state.getIn(['mall', 'shopCart'])
    }),
    shallowEqual
  )
  const handleBuy = async ({ amount, productVo }) => {
    const res = await buyProductReq({
      productId: parseInt(productVo.id),
      productNum: amount
    })
    if (res.code === 200) {
      notification.success({
        message: '购买成功'
      })
      window.localStorage.setItem('coin', coin - amount * productVo.price)
    } else {
      notification.error({
        message: '购买失败',
        description: '余额不足'
      })
    }
  }

  const changeNum = tag => {
    if (tag === '-') {
      if (num === 1) return
      setNum(num - 1)
    } else {
      setNum(num + 1)
    }
  }

  const handleDeleteClick = async ({ id }) => {
    const res = await removeShopCartReq(id)
    if (res.code === 200) {
      message.success('移除成功~')
      dispatch(getShopCartListAction())
    }
  }
  const columns = [
    {
      title: '#',
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => index + 1
    },
    {
      title: '商品名称',
      dataIndex: 'productVo',
      key: 'productName',
      render: productVo => <span>{productVo.productName}</span>
    },
    {
      title: '商品图片',
      dataIndex: 'productVo',
      key: 'urls',
      render: productVo => <Image src={productVo.urls[0]} className="image" />
    },
    {
      title: '商品价格',
      dataIndex: 'productVo',
      key: 'price',
      render: productVo => <span>￥{productVo.price}</span>
    },
    {
      title: '商品数量',
      dataIndex: 'amount',
      key: 'amount',
      render: amount => {
        if (flag) {
          setNum(amount)
          setFlag(false)
        }
        return (
          <div className="num">
            <div className="btn" onClick={() => changeNum('-')}>
              -
            </div>
            <div className="number">{num}</div>
            <div className="btn" onClick={() => changeNum('+')}>
              +
            </div>
          </div>
        )
      }
    },
    {
      title: '商品总价',
      dataIndex: 'totalPrice',
      key: 'totalPrice'
    },
    {
      title: '操作',
      key: 'action',
      fixed: 'right',
      width: 200,
      render: text => (
        <div>
          <Button type="link" size="small" onClick={() => handleBuy(text)}>
            购买
          </Button>
          <Popconfirm
            title="确认移除吗?"
            onConfirm={() => handleDeleteClick(text)}
            okText="确认"
            cancelText="取消"
          >
            <Button type="link" danger size="small">
              移除
            </Button>
          </Popconfirm>
        </div>
      )
    }
  ]
  return (
    <CartWrapper>
      <Table columns={columns} dataSource={shopCart} pagination={false} />
    </CartWrapper>
  )
})

export default ShopCart
