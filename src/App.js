import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from '@/router'

import AppHeader from '@/layouts/app-header'
import AppFooter from '@/layouts/app-footer'

const App = memo(() => {
  return (
    <div className='App'>
      <div>
        {/* 头部 */}
        <AppHeader />

        {/* 内容区域 */}
        <div className='content'>
          {useRoutes(routes)}
        </div>

        {/* 底部区域 */}
        <AppFooter />
      </div>
    </div>
  )
})

export default App