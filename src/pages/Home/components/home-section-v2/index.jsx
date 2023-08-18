import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'

import SectionTitle from '@/components/SectionTitle'
import SectionTabs from '@/components/SectionTabs'
import SectionRooms from '@/components/SectionRooms'
import { HomeSectionV2Wrapper } from './style'
import SectionFooter from '@/components/SectionFooter'

const HomeSectionV2 = memo((props) => {
  const { itemData } = props
  const initName = Object.keys(itemData.dest_list)[0]
  const [name, setName] = useState(initName)
  const tabNames = itemData?.dest_address?.map(item => item.name)

  const handleReceiveName = useCallback((val) => {
    setName(val)
  }, [])

  return (
    <HomeSectionV2Wrapper>
      <SectionTitle title={itemData?.title} subTitle={itemData?.subtitle} />
      <SectionTabs tabNames={tabNames} receiveTabs={handleReceiveName} />
      <SectionRooms roomList={itemData?.dest_list?.[name]} width='33.33%' />
      <SectionFooter name={name} />
    </HomeSectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  itemData: PropTypes.object
}

export default HomeSectionV2