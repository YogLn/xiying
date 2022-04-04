import React, { memo, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from '@/router'
import store from '@/store'

import { BackTop, ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import Loading from '@/components/loading'
import Header from '@/components/header'
import Footer from '@/components/footer'

const App = memo(() => {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<Loading />}>
            <div style={{ marginTop: '60px' }}>{renderRoutes(routes)}</div>
          </Suspense>
          <Footer />
          <BackTop />
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
  )
})

export default App
