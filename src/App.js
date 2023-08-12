import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'

const App = memo(() => {
  return (
    <div className='App'>
      <div>
        {/* 头部 */}
        <div className='header'>header</div>

        {/* 内容区域 */}
        <div className='content'>
          {useRoutes(routes)}
        </div>

        {/* 底部区域 */}
        <div className='footer'>footer</div>
      </div>
    </div>
  )
})

export default App