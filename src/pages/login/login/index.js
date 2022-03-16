import React, { memo, useState } from 'react'
import { LoginWrapper } from './style'

import LoginBox from '@/components/login-box'
import { loginRequest } from '@/services/login';

const Login = memo(() => {
  const [loginForm, setLoginForm]  = useState({
    username: '',
    password: ''
  })

  const handleLogin = () => {
    loginRequest(loginForm)
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
