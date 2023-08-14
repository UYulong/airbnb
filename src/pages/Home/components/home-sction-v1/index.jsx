import SectionRooms from '@/components/SectionRooms'
import SectionTitle from '@/components/SectionTitle'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV1Wrapper } from './style'

const HomeSectionV1 = memo((props) => {
  const { itemData } = props
  return (
    <HomeSectionV1Wrapper>
      <SectionTitle title={itemData.title} subTitle={itemData.subtitle} />
      <SectionRooms roomList={itemData.list} />
    </HomeSectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  itemData: PropTypes.object
}

export default HomeSectionV1