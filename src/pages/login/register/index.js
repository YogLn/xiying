import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import { LoginWrapper } from './style'

import { message } from 'antd';
import LoginBox from '@/components/login-box'
import { registerRequest } from '@/services/login';

const Login = memo(() => {
  const history = useHistory()
  const handleRegister = async(values) => {
    const res = await registerRequest(values)
    if(res.code === 200) {
      message.success('注册成功，快去登录吧~')
      history.push('/login')
    }
  }

  return (
    <LoginWrapper>
      <div className="login-box">
        <LoginBox title="注册账户" handleRegister={handleRegister}/>
      </div>
    </LoginWrapper>
  )
})

export default Login
