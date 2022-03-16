import React, { memo } from 'react'
import { Form, Input, Button, Select } from 'antd'

import { LoginBoxWrapper } from './style'

const LoginBox = memo(props => {
  const { title, setRegisterForm, handleRegister, setLoginForm, handleLogin } =
    props
  const { Option } = Select
  const onFinish = values => {
    if (title === '注册账户') {
      setRegisterForm(values)
      handleRegister()
    } else {
      setLoginForm(values)
      handleLogin()
    }
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <LoginBoxWrapper>
      <div className="title">{title}</div>
      <hr />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="form"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        {title === '注册账户' && (
          <Form.Item label="年龄" name="age">
            <Input />
          </Form.Item>
        )}

        {title === '注册账户' && (
          <Form.Item label="手机号" name="phone">
            <Input />
          </Form.Item>
        )}

        {title === '注册账户' && (
          <Form.Item label="性别" name="sex">
            <Select initialvalues="男" style={{ width: 120 }}>
              <Option value="1">男</Option>
              <Option value="0">女</Option>
            </Select>
          </Form.Item>
        )}

        <Form.Item wrapperCol={{ offset: 14, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button htmlType="reset">重置</Button>
        </Form.Item>
      </Form>
    </LoginBoxWrapper>
  )
})

export default LoginBox