import React, { memo, useState } from 'react'
import { LoginWrapper } from './style'

import { message } from 'antd';
import LoginBox from '@/components/login-box'
import { loginRequest } from '@/services/login';

const Login = memo(() => {
  const [loginForm, setLoginForm]  = useState({
    username: '',
    password: ''
  })

  const handleLogin = async() => {
    const res = await loginRequest(loginForm)
    if(res.code === 200) {
      message.success('登录成功~');
      window.localStorage.setItem('token', res.data)
    }
  }
  return (
    <LoginWrapper>
      <div className="login-box">
        <LoginBox title="登录账户" setLoginForm={setLoginForm} handleLogin={handleLogin}/>
      </div>
    </LoginWrapper>
  )
})

export default Login
