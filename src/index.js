import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import '@/assets/css/base.css'

let val = window.localStorage.getItem('token')
val = JSON.parse(val)
if (val) {
  if (Date.now() - val.time > val.expire) {
    window.localStorage.clear()
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
