import React, { memo, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Form, Input, Modal, Menu, Dropdown, Select, message } from 'antd'
import { getUserInfo, changeUserInfoReq } from '@/services/user'
import Upload from '../upload'
import { uploadImg } from '@/utils/upload'

import { UserInfoWrapper } from './style'

const UserInfo = memo(() => {
  const history = useHistory()
  const { Option } = Select

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [fileList, setFileList] = useState([])
  const avatar = window.localStorage.getItem('avatar')
  const username = window.localStorage.getItem('username')

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
    if(url) {
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
  const handleSelectChange = value => {
    setUserInfo({
      ...userInfo,
      sex: value
    })
  }

  const menu = (
    <Menu>
      <Menu.Item key="change-info">
        <div className="change-info" onClick={() => myInfo()}>
          个人资料
        </div>
      </Menu.Item>
      <Menu.Item key="change-pwd">
        <div className="change-pwd">修改密码</div>
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
    </UserInfoWrapper>
  )
})

export default UserInfo
