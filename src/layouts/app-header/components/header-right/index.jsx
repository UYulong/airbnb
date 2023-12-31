import React, { memo, useEffect, useState } from 'react'
import { HeaderRightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  const [showPanel, setShowPannel] = useState(false)

  const handlePannelClickEvent = () => {
    setShowPannel(true)
  }

  useEffect(() => {
    const windowClickFn = () => {
      setShowPannel(false)
    }
    window.addEventListener('click', windowClickFn, true)

    return () => {
      window.removeEventListener('click', windowClickFn, true)
    }
  })

  return (
    <HeaderRightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal />
        </span>
      </div>

      <div className='profile' onClick={handlePannelClickEvent}>
        <IconMenu />
        <IconAvatar />

        {showPanel && (
          <div className='panel'>
            <div className='top'>
              <div className='item register'>注册</div>
              <div className='item login'>登录</div>
            </div>
            <div className='bottom'>
              <div className='item'>出租房源</div>
              <div className='item'>开展体验</div>
              <div className='item'>帮助</div>
            </div>
          </div>
        )}
      </div>
    </HeaderRightWrapper>
  )
})

export default HeaderRight