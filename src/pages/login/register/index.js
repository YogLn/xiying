import React, { memo, useState } from 'react'
import { LoginWrapper } from './style'

import LoginBox from '@/components/login-box'
import { registerRequest } from '@/services/login';

const Login = memo(() => {
  const [registerForm, setRegisterForm]  = useState({
    username: '',
    password: '',
    age: '',
    phone: '',
    sex: ''
  })

  const handleRegister = () => {
    registerRequest(registerForm)
  }

  return (
    <LoginWrapper>
      <div className="login-box">
        <LoginBox title="注册账户" setRegisterForm={setRegisterForm} handleRegister={handleRegister}/>
      </div>
    </LoginWrapper>
  )
})

export default Login
