import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'

const SectionFooter = memo((props) => {
  const { name } = props
  let msg = '显示全部'
  if (name) {
    msg = `显示更多${name}的房源`
  }
  return (
    <SectionFooterWrapper color={name ? '#00848a' : '#000'}>
      <div className="info">
        <span className='text'>{msg}</span>
        <IconMoreArrow />
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter