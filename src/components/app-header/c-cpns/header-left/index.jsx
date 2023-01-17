import IconLogio from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <IconLogio />
      
    </LeftWrapper>
  )
})

export default HeaderLeft
