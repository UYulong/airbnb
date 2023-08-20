import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ImgItemWrapper } from './style'

const ImgItem = memo((props) => {
  const { list } = props
  return (
    <ImgItemWrapper>
      <div className='inner'>
        <div className='item-info'>
          <img className='cover' src={list.picture_url} alt="" />
          <div className='bg-cover'></div>
          <div className='info'>
            <div className='city'>{list.city}</div>
            <div className='price'>均价 {list.price}</div>
          </div>
        </div>
      </div>
    </ImgItemWrapper>
  )
})

ImgItem.propTypes = {
  list: PropTypes.object
}

export default ImgItem