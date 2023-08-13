import React, { memo } from 'react'
import { HomeWrapper } from './style'
import Banner from './components/banner'

const Home = memo(() => {
  return (
    <HomeWrapper>
      {/* 轮播图 */}
      <Banner />

      {/* 内容区域 */}
      <div className='content'>
        content
      </div>
    </HomeWrapper>
  )
})

export default Home