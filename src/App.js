import React, { memo, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './router'

import Header from '@/components/header';
import Footer from '@/components/footer';

const App = memo(() => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>加载中...</div>}>{renderRoutes(routes)}</Suspense>
      <Footer/>
    </BrowserRouter>
  )
})

export default App