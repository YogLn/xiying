import React, { memo, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  message,
  Modal,
  Form,
  Input,
  DatePicker,
  TimePicker,
  notification
} from 'antd'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Tabs } from 'antd'
import PostBox from '@/components/post-box'
import RankAlbum from '@/components/rankAlbum'
import Album from '@/components/album2'
import {
  getPostListByIdAction,
  getUserAlbumAction,
  getUserInfoAction,
  getRemarkListAction,
  getUserWorkListAction
} from './store/actionCreators'
import { addOrderRequest } from '@/services/order'
import { chargeReq } from '@/services/user'
import { formatUtcString } from '@/utils/format'
import { putWorkLikeRequest } from '@/services/rank'
import { UserWrapper } from './style'

const UserInfo = memo(props => {
  const userId = props.match.params.id
  const history = useHistory()
  const { TabPane } = Tabs
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [chargeVisible, setChargeVisible] = useState(false)
  const [charge, setCharge] = useState(0)
  const [coin, setCoin] = useState(window.localStorage.getItem('coin'))

  // 约拍
  const id = window.localStorage.getItem('id')
  const [appointPlace, setAppointPlace] = useState('')
  const [data, setData] = useState('')
  const [timeValue, setTimeValue] = useState()
  const [paymentAmount, setPaymentAmount] = useState()
  useEffect(() => {
    dispatch(getPostListByIdAction(userId))
    dispatch(getUserInfoAction(userId))
    dispatch(getUserAlbumAction(userId))
    dispatch(getRemarkListAction(userId))
    dispatch(getUserWorkListAction(userId))
  }, [userId, dispatch])

  const { userInfo, postList, albumList, remarkList, userWorkList } =
    useSelector(
      state => ({
        userInfo: state.getIn(['user', 'userInfo']),
        postList: state.getIn(['user', 'postList']),
        albumList: state.getIn(['user', 'albumList']),
        remarkList: state.getIn(['user', 'remarkList']),
        userWorkList: state.getIn(['user', 'userWorkList'])
      }),
      shallowEqual
    )
  const handleMessage = () => {
    const token = window.localStorage.getItem('token')
    if (!token) {
      return message.info('您还没有登录，快去登录吧~')
    }
    history.push({ pathname: '/message', state: userInfo })
  }
  const handlePhoto = () => {
    const token = window.localStorage.getItem('token')
    if (!token) {
      return message.info('您还没有登录，快去登录吧~')
    }
    setIsModalVisible(true)
    // history.push('/order')
  }

  const handleOk = async () => {
    const res = await addOrderRequest({
      appointPlace,
      appointTime: data + ' ' + timeValue,
      paymentAmount,
      photographerId: userId,
      customerId: id
    })
    if (res.code === 200) {
      notification.success({
        message: '约拍成功，等待摄影师同意',
        description: '等待摄影师同意'
      })
      setIsModalVisible(false)
    } else {
      notification.error({
        message: '约拍失败',
        description: '余额不足'
      })
    }
  }
  const handleChange = (e, tag) => {
    const { value } = e.target
    const reg = /^-?\d*(\.\d*)?$/
    if (tag === 'appointPlace') {
      setAppointPlace(value)
    } else {
      if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
        setPaymentAmount(new Intl.NumberFormat().format(value))
      }
    }
  }

  const handleDataChange = (data, dataString) => {
    setData(dataString)
  }
  const handleTimeChange = (data, dataString) => {
    setTimeValue(dataString)
  }

  const handleCharge = e => {
    const { value } = e.target
    const reg = /^-?\d*(\.\d*)?$/
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      setCharge(new Intl.NumberFormat().format(value))
    }
  }

  const handleChargeOk = async () => {
    const res = await chargeReq(charge)
    if (res.code === 200) {
      message.success('充值成功~')
      const coin = window.localStorage.getItem('coin')
      window.localStorage.setItem('coin', parseFloat(coin) + parseFloat(charge))
      setCoin(parseFloat(coin) + parseFloat(charge))
      setChargeVisible(false)
    }
  }
  //点赞
  const handleLikeClick = async rankId => {
    await putWorkLikeRequest(rankId)
    dispatch(getUserWorkListAction(userId))
  }

  return (
    <UserWrapper>
      <div className="info">
        <div className="left">
          <img src={userInfo?.avatar} alt="" />
        </div>
        <div className="right">
          <div className="name">{userInfo?.username}</div>
          <div className="info-detail">
            <div className="age">年龄：{userInfo?.age}</div>
            <div className="sex">性别：{userInfo?.sex === 1 ? '男' : '女'}</div>
            <div className="phone">联系方式：{userInfo?.phone}</div>
            {userId === id ? <div className="coin">余额：{coin}￥</div> : null}
          </div>
          {userId === id ? (
            <div className="charge" onClick={() => setChargeVisible(true)}>
              充值
            </div>
          ) : (
            <div className="photo" onClick={() => handlePhoto()}>
              约拍
            </div>
          )}

          <div className="message" onClick={() => handleMessage()}>
            私信
          </div>
        </div>
      </div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="TA的帖子" key="1">
          <div className="post">
            {postList?.map(item => {
              return <PostBox key={item.postId} content={item} />
            })}
          </div>
        </TabPane>
        <TabPane tab="TA的相册" key="2">
          <div className="album">
            {albumList.length === 0 ? (
              <div className="none">相册列表为空~</div>
            ) : (
              albumList.map(item => {
                return (
                  <div className="item" key={item.albumId}>
                    <Album
                      url={item.cover}
                      albumId={item.albumId}
                      width="200px"
                      content={item}
                      showDelete={false}
                      userId={userId}
                    />
                  </div>
                )
              })
            )}
          </div>
        </TabPane>
        <TabPane tab="TA的作品" key="3">
          <div className="rank-list">
            {userWorkList.map(item => {
              return (
                <RankAlbum
                  content={item}
                  handleLike={handleLikeClick}
                  key={item.rankWorkId}
                />
              )
            })}
          </div>
        </TabPane>
        <TabPane tab="TA的评价" key="4">
          {remarkList.map(item => {
            return (
              <div className="remark" key={item.appointComment}>
                <div className="remark-left">
                  <div className="user">
                    <img src={item?.userVo?.avatar} alt="" />
                    <div className="username">{item?.userVo?.username}</div>
                  </div>
                  <div className="content">评价说：{item?.appointComment}</div>
                </div>
                <div className="time">{formatUtcString(item?.commentTime)}</div>
              </div>
            )
          })}
        </TabPane>
      </Tabs>
      <Modal
        title="填写约拍信息"
        visible={isModalVisible}
        onOk={() => handleOk()}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form
          name="form"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
        >
          <Form.Item
            label="约拍地点"
            rules={[{ required: true, message: '不能为空~' }]}
          >
            <Input
              onChange={e => handleChange(e, 'appointPlace')}
              value={appointPlace}
            />
          </Form.Item>

          <Form.Item
            label="约拍日期"
            rules={[{ required: true, message: '不能为空~' }]}
          >
            <DatePicker onChange={handleDataChange} />
          </Form.Item>
          <Form.Item
            label="具体时间"
            rules={[{ required: true, message: '不能为空~' }]}
          >
            <TimePicker onChange={handleTimeChange} />
          </Form.Item>
          <Form.Item
            label="约拍金额"
            rules={[{ required: true, message: '不能为空~' }]}
          >
            <Input
              onChange={e => handleChange(e, 'paymentAmount')}
              value={paymentAmount}
              prefix="￥"
              suffix="RMB"
            />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="充值金额"
        visible={chargeVisible}
        onOk={handleChargeOk}
        onCancel={() => setChargeVisible(false)}
      >
        <Input
          onChange={e => handleCharge(e)}
          value={charge}
          prefix="￥"
          suffix="RMB"
        />
      </Modal>
    </UserWrapper>
  )
})

export default UserInfo
