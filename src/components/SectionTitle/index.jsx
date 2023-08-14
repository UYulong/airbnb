import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionTitleWrapper } from './style'

const SectionTitle = memo((props) => {
  const { title, subTitle } = props
  return (
    <SectionTitleWrapper>
      <h2 className='title'>{title}</h2>
      {subTitle && <div className='subtitle'>{subTitle}</div>}
    </SectionTitleWrapper>
  )
})

SectionTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export default SectionTitle