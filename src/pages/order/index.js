import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Tabs, Table, Tag, Button, notification } from 'antd'
import { getOrderListAction, getProductListAction } from './store/actionCreator'
import {
  handleOrderReq,
  handleCancelOrderReq,
  handleCompleteOrderReq
} from '@/services/order'
import { formatUtcString } from '@/utils/format'
import { OrderWrapper } from './style'

const About = memo(() => {
  const dispatch = useDispatch()
  const { TabPane } = Tabs
  useEffect(() => {
    dispatch(getOrderListAction(0)) // 客户
    dispatch(getOrderListAction(1)) // 摄影师
    dispatch(getProductListAction())
  }, [dispatch])

  const { myOrderList, cusOrderList, productList } = useSelector(
    state => ({
      cusOrderList: state.getIn(['order', 'cusOrderList']),
      myOrderList: state.getIn(['order', 'myOrderList']),
      productList: state.getIn(['order', 'productList'])
    }),
    shallowEqual
  )

  const handleCancel = async ({ id }) => {
    const res = await handleCancelOrderReq(id)
    if (res.code === 200) {
      notification.success({
        message: '已取消订单'
      })
      dispatch(getOrderListAction(0)) // 客户
      dispatch(getOrderListAction(1)) // 摄影师
    }
  }
  const handleComplete = async ({ id }) => {
    const res = await handleCompleteOrderReq(id)
    if (res.code === 200) {
      notification.success({
        message: '订单完成'
      })
      dispatch(getOrderListAction(0)) // 客户
      dispatch(getOrderListAction(1)) // 摄影师
    }
  }
  const handleClose = async ({ id }) => {
    const res = await handleOrderReq(2, id)
    if (res.code === 200) {
      notification.success({
        message: '已同意该约拍',
        description: '请及时参加'
      })
      dispatch(getOrderListAction(0)) // 客户
      dispatch(getOrderListAction(1)) // 摄影师
    }
  }
  const handleAgree = async ({ id }) => {
    const res = await handleOrderReq(1, id)
    if (res.code === 200) {
      notification.success({
        message: '已同意该约拍',
        description: '请及时参加'
      })
      dispatch(getOrderListAction(0)) // 客户
      dispatch(getOrderListAction(1)) // 摄影师
    }
  }

  const MyColumns = [
    {
      title: '#',
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => index + 1
    },
    {
      title: '订单号',
      dataIndex: 'id',
      key: 'id',
      render: id => <span>{id}</span>
    },
    {
      title: '摄影师头像',
      dataIndex: 'photographerUserVo',
      key: 'avatar',
      render: photographerUserVo => (
        <img src={photographerUserVo?.avatar} alt="" />
      )
    },
    {
      title: '摄影师姓名',
      dataIndex: 'photographerUserVo',
      key: 'username',
      render: photographerUserVo => <span>{photographerUserVo.username}</span>
    },
    {
      title: '约拍地点',
      dataIndex: 'appointPlace',
      key: 'appointPlace'
    },
    {
      title: '约拍时间',
      dataIndex: 'appointTime',
      key: 'appointTime'
    },
    {
      title: '订单金额',
      dataIndex: 'paymentAmount',
      key: 'paymentAmount',
      render: paymentAmount => <span>￥{paymentAmount}</span>
    },
    {
      title: '订单状态',
      dataIndex: 'orderState',
      key: 'orderState',
      render: orderState => {
        if (orderState === 0) return <Tag color="#2db7f5">进行中</Tag>
        else if (orderState === 1) return <Tag color="#f50">已取消</Tag>
        else return <Tag color="#87d068">已完成</Tag>
      }
    },
    {
      title: '操作',
      key: 'action',
      render: text => {
        if (text.orderState === 0) {
          return (
            <div>
              <Button type="link" onClick={() => handleComplete(text)}>
                完成
              </Button>
              <Button type="link" danger onClick={() => handleCancel(text)}>
                取消
              </Button>
            </div>
          )
        } else {
          return <span>订单结束</span>
        }
      }
    }
  ]

  const CusColumns = [
    {
      title: '#',
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => index + 1
    },
    {
      title: '订单号',
      dataIndex: 'id',
      key: 'id',
      render: id => <span>{id}</span>
    },
    {
      title: '客户头像',
      dataIndex: 'customerUserVo',
      key: 'avatar',
      render: customerUserVo => <img src={customerUserVo?.avatar} alt="" />
    },
    {
      title: '客户姓名',
      dataIndex: 'customerUserVo',
      key: 'username',
      render: customerUserVo => <span>{customerUserVo.username}</span>
    },
    {
      title: '约拍地点',
      dataIndex: 'appointPlace',
      key: 'appointPlace'
    },
    {
      title: '约拍时间',
      dataIndex: 'appointTime',
      key: 'appointTime'
    },
    {
      title: '订单金额',
      dataIndex: 'paymentAmount',
      key: 'paymentAmount',
      render: paymentAmount => <span>￥{paymentAmount}</span>
    },
    {
      title: '订单状态',
      dataIndex: 'orderState',
      key: 'orderState',
      render: orderState => {
        if (orderState === 0) return <Tag color="#2db7f5">进行中</Tag>
        else if (orderState === 1) return <Tag color="#f50">已取消</Tag>
        else return <Tag color="#87d068">已完成</Tag>
      }
    },
    {
      title: '操作',
      key: 'action',
      render: text => {
        if (text.orderState === 0) {
          return (
            <div>
              <Button type="link" onClick={() => handleAgree(text)}>
                同意
              </Button>
              <Button type="link" danger onClick={() => handleClose(text)}>
                取消
              </Button>
            </div>
          )
        } else {
          return <span>订单完成</span>
        }
      }
    }
  ]

  const ProColumns = [
    {
      title: '#',
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => index + 1
    },
    {
      title: '订单号',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '商品名称',
      dataIndex: 'productVo',
      key: 'productName',
      render: productVo => <span>{productVo?.productName}</span>
    },
    {
      title: '商品图片',
      dataIndex: 'productVo',
      key: 'urls',
      render: productVo => <img src={productVo?.urls[0]} alt="" />
    },
    {
      title: '订单状态',
      dataIndex: 'productVo',
      key: 'state',
      render: productVo => {
        if (productVo.state === 0) return <Tag color="#2db7f5">进行中</Tag>
        else if (productVo.state === 1) return <Tag color="#f50">已取消</Tag>
        else return <Tag color="#87d068">已完成</Tag>
      }
    },
    {
      title: '购买时间',
      dataIndex: 'createTime',
      key: 'createTime',
      render: createTime => <span>{formatUtcString(createTime)}</span>
    }
  ]
  return (
    <OrderWrapper>
      <Tabs defaultActiveKey="1">
        <TabPane tab="发起订单" key="1">
          <Table
            columns={MyColumns}
            dataSource={myOrderList}
            pagination={false}
          />
        </TabPane>
        <TabPane tab="预约订单" key="2">
          <Table
            columns={CusColumns}
            dataSource={cusOrderList}
            pagination={false}
          />
        </TabPane>
        <TabPane tab="商品订单" key="3">
          <Table
            columns={ProColumns}
            dataSource={productList}
            pagination={false}
          />
        </TabPane>
      </Tabs>
    </OrderWrapper>
  )
})

export default About
