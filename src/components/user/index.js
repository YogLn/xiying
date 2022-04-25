import React, { memo, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import {
  Form,
  Input,
  Modal,
  Menu,
  Dropdown,
  Select,
  message,
  notification,
  Cascader
} from 'antd'
import { MessageTwoTone } from '@ant-design/icons'
import {
  getUserInfo,
  changeUserInfoReq,
  changePwd,
  addAddressReq,
  getAddressReq,
  updateAddressReq
} from '@/services/user'
import Upload from '../upload'
import { uploadImg } from '@/utils/upload'
import { UserInfoWrapper } from './style'
import { provinces } from '@/common/provinces'

const UserInfo = memo(() => {
  const history = useHistory()
  const { Option } = Select

  const [hasAddress, setHasAddress] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [pwdVisible, setPwdVisible] = useState(false)
  const [addressVisible, setAddressVisible] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [pwd, setPwd] = useState({})
  const [address, setAddress] = useState({})
  const [fileList, setFileList] = useState([])
  const avatar = window.localStorage.getItem('avatar')
  const username = window.localStorage.getItem('username')

  useEffect(() => {
    // pwdForm.validateFields(['oldPassword'])
    getAddressReq().then(res => {
      setAddress(res?.data[0])
      if (res.data.length > 0) {
        setHasAddress(true)
      }
    })
  }, [])

  const handleLogout = () => {
    history.push('/')
    window.location.reload()
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('username')
    window.localStorage.removeItem('avatar')
  }
  const myInfo = async () => {
    const res = await getUserInfo()
    setUserInfo(res.data)
    setIsModalVisible(true)
  }

  const changeUserInfo = async url => {
    let obj = { ...userInfo }
    if (url) {
      obj = { ...userInfo, avatar: url }
    }
    const res = await changeUserInfoReq(obj)
    if (res.code === 200) {
      message.success('修改成功~')
      setIsModalVisible(false)
      window.localStorage.setItem('username', obj.username)
      window.localStorage.setItem('avatar', obj.avatar)
      window.location.reload()
    }
  }

  const handleOk = async () => {
    if (!fileList) return
    await uploadImg(fileList[0])(changeUserInfo)
  }

  const handleImgUpload = file => {
    setFileList([...fileList, file])
  }

  const handleInputChange = (e, key) => {
    setUserInfo({
      ...userInfo,
      [key]: e.target.value
    })
  }
  const handlePwdChange = (e, key) => {
    setPwd({
      ...pwd,
      [key]: e.target.value
    })
  }

  const handleAddressChange = (e, key) => {
    setAddress({
      ...address,
      [key]: e.target.value
    })
  }
  const handleSelectChange = value => {
    setUserInfo({
      ...userInfo,
      sex: value
    })
  }

  const myPage = () => {
    const id = window.localStorage.getItem('id')
    history.push(`/user/${id}`)
  }

  const handleMessageClick = () => {
    history.push('/message')
  }

  const onCascaderChange = data => {
    setAddress({
      ...address,
      pcc: data
    })
  }
  const handleChangeAddress = async () => {
    if (hasAddress) {
      const res = await updateAddressReq(address)
      if (res.code === 200) {
        notification.success({
          message: '修改地址成功~'
        })
        setAddressVisible(false)
      }
    } else {
      const res = await addAddressReq(address)
      if (res.code === 200) {
        notification.success({
          message: '添加地址成功~'
        })
        setAddressVisible(false)
      }
    }
  }

  const handleChangePwd = async () => {
    // pwdForm.validateFields().then(values => {
    //   console.log(values)
    // })
    if (pwd.newPassword !== pwd.checkedPassword) {
      return notification.error({
        message: '两次密码不一致~',
        description: '请重新输入~'
      })
    }
    const res = await changePwd(pwd)
    if (res.code === 200) {
      notification.success({
        message: '修改密码成功~',
        description: '请重新登录~'
      })
      window.localStorage.clear()
      setPwdVisible(false)
      history.push('/login')
      window.location.reload()
    } else {
      return notification.error({
        message: '修改失败~',
        description: '请稍后重试~'
      })
    }
  }
  const menu = (
    <Menu>
      <Menu.Item key="my-page">
        <div className="change-info" onClick={() => myPage()}>
          个人主页
        </div>
      </Menu.Item>
      <Menu.Item key="change-info">
        <div className="change-info" onClick={() => myInfo()}>
          修改信息
        </div>
      </Menu.Item>
      <Menu.Item key="change-pwd">
        <div className="change-pwd" onClick={() => setPwdVisible(true)}>
          修改密码
        </div>
      </Menu.Item>
      <Menu.Item key="change-address">
        <div className="change-pwd" onClick={() => setAddressVisible(true)}>
          我的地址
        </div>
      </Menu.Item>
      <Menu.Item key="logout">
        <div className="logout" onClick={() => handleLogout()}>
          退出登录
        </div>
      </Menu.Item>
    </Menu>
  )

  return (
    <UserInfoWrapper>
      <MessageTwoTone
        className="message"
        twoToneColor="#52c41a"
        onClick={() => handleMessageClick()}
      />
      <Dropdown overlay={menu} placement="bottom" arrow>
        <div className="info">
          <img src={avatar} alt="" />
          <span>{username}</span>
        </div>
      </Dropdown>
      <Modal
        title="个人资料"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
        className="modal"
      >
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          initialValues={userInfo}
          autoComplete="off"
          className="form"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名！' }]}
          >
            <Input
              value={userInfo.username}
              onChange={e => handleInputChange(e, 'username')}
            />
          </Form.Item>
          <Form.Item label="年龄" name="age">
            <Input
              value={userInfo.age}
              onChange={e => handleInputChange(e, 'age')}
            />
          </Form.Item>
          <Form.Item label="手机号" name="phone">
            <Input
              value={userInfo.phone}
              onChange={e => handleInputChange(e, 'phone')}
            />
          </Form.Item>
          <Form.Item label="性别" name="sex">
            <Select
              initialvalues="男"
              style={{ width: 120 }}
              value={userInfo.sex}
              onChange={v => handleSelectChange(v)}
            >
              <Option value={1}>男</Option>
              <Option value={0}>女</Option>
            </Select>
          </Form.Item>
          <Form.Item label="头像" name="sex">
            <Upload handleImgUpload={handleImgUpload} />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Basic Modal"
        visible={pwdVisible}
        onOk={handleChangePwd}
        onCancel={() => setPwdVisible(false)}
      >
        <Form
          name="pwd"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          initialValues={pwd}
          autoComplete="off"
          className="form"
        >
          <Form.Item
            label="原始密码"
            name="oldPassword"
            validateTrigger="onBlur"
            rules={[{ required: true, message: '请输入旧密码！' }]}
          >
            <Input.Password
              value={pwd.oldPassword}
              onChange={e => handlePwdChange(e, 'oldPassword')}
            />
          </Form.Item>
          <Form.Item
            label="新密码"
            validateTrigger="onBlur"
            name="newPassword"
            rules={[
              { required: true, message: '请输入新密码！', trigger: 'blur' }
            ]}
          >
            <Input.Password
              value={pwd.newPassword}
              onChange={e => handlePwdChange(e, 'newPassword')}
            />
          </Form.Item>
          <Form.Item
            label="确认密码"
            name="checkedPassword"
            validateTrigger="onBlur"
            rules={[{ required: true, message: '请确认密码！' }]}
          >
            <Input.Password
              value={pwd.checkedPassword}
              onChange={e => handlePwdChange(e, 'checkedPassword')}
            />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="收货地址"
        visible={addressVisible}
        onOk={handleChangeAddress}
        onCancel={() => setAddressVisible(false)}
      >
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          initialValues={address}
          autoComplete="off"
          className="form"
        >
          <Form.Item
            label="收货人姓名"
            name="receiverName"
            validateTrigger="onBlur"
            rules={[{ required: true, message: '不能为空~' }]}
          >
            <Input
              value={address?.receiverName}
              onChange={e => handleAddressChange(e, 'receiverName')}
            />
          </Form.Item>
          <Form.Item
            label="电话号码"
            name="receiverPhone"
            validateTrigger="onBlur"
            rules={[{ required: true, message: '不能为空~' }]}
          >
            <Input
              value={address?.receiverPhone}
              onChange={e => handleAddressChange(e, 'receiverPhone')}
            />
          </Form.Item>
          <Form.Item
            label="所在省市"
            name="pcc"
            validateTrigger="onBlur"
            rules={[{ required: true, message: '不能为空~' }]}
          >
            <Cascader options={provinces} onChange={onCascaderChange} />
          </Form.Item>
          <Form.Item
            label="详细地址"
            name="specificAddress"
            validateTrigger="onBlur"
            rules={[{ required: true, message: '不能为空~' }]}
          >
            <Input
              value={address?.specificAddress}
              onChange={e => handleAddressChange(e, 'specificAddress')}
            />
          </Form.Item>
        </Form>
      </Modal>
    </UserInfoWrapper>
  )
})

export default UserInfo
