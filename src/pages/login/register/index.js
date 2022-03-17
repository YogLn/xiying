import React, { memo, useState } from 'react'
import { LoginWrapper } from './style'

import { message } from 'antd';
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

  const handleRegister = async() => {
    console.log(registerForm)
    const res = await registerRequest(registerForm)
    console.log(res);
    if(res.code === 200) {
      message.success('注册成功，快去登录吧~')
    }
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
