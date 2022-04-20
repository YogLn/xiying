import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import { LoginWrapper } from './style'

import { message } from 'antd'
import LoginBox from '@/components/login-box'
import { loginRequest } from '@/services/login'

const Login = memo(() => {
  const history = useHistory()

  const handleLogin = async values => {
    const res = await loginRequest(values)
    console.log(res)
    if (res.code === 200) {
      message.success('登录成功~')
      window.localStorage.setItem('id', res?.data?.id)
      window.localStorage.setItem('avatar', res?.data?.avatar)
      window.localStorage.setItem('username', res?.data?.username)
      window.localStorage.setItem('coin', res?.data?.coin)
      let obj = {
        data: res?.data?.token,
        time: Date.now(),
        expire: 86400000 * 2
      }
      window.localStorage.setItem('token', JSON.stringify(obj))
      history.push('/home')
      window.location.reload()
    } else {
      message.error('用户名或密码错误~')
    }
  }
  return (
    <LoginWrapper>
      <div className="login-box">
        <LoginBox title="登录账户" handleLogin={handleLogin} />
      </div>
    </LoginWrapper>
  )
})

export default Login
