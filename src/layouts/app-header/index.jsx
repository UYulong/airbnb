import React, { memo } from 'react'

import HeaderLeft from './components/header-left'
import HeaderCenter from './components/header-center'
import HeaderRight from './components/header-right'

import { AppHeaderWrapper } from './style'

const AppHeader = memo(() => {
  return (
    <AppHeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </AppHeaderWrapper>
  )
})

export default AppHeader