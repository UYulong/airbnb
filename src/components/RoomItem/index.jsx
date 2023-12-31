import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RootItemWrapper } from './style'

import { Rating } from '@mui/material'

const RootItem = memo((props) => {
  const { itemData, width = '25%' } = props
  return (
    <RootItemWrapper
      verifycolor={itemData?.verify_info?.text_color || "#39576a"}
      width={width}>
      <div className='inner'>
        <div className='cover'>
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className='desc'>
          {itemData.verify_info.messages.join(" · ")}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>¥{itemData.price}/晚</div>

        <div className='bottom'>
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
          />
          <span className='count'>{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
          }
        </div>
      </div>

    </RootItemWrapper>
  )
})

RootItem.propTypes = {
  itemData: PropTypes.object
}

export default RootItem