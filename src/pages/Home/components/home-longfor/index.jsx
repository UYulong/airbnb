import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeLongforWrapper } from './style'
import SectionTitle from '@/components/SectionTitle'
import ImgItem from '@/components/ImgItem'
import ScrollView from '@/components/ScrollView'

const HomeLongfor = memo((props) => {
  const { itemData } = props
  return (
    <HomeLongforWrapper>
      <SectionTitle title={itemData.title} subTitle={itemData.subtitle} />

      <ScrollView>
        {
          itemData.list.map(item => {
            return <ImgItem key={item.city} list={item} />
          })
        }
      </ScrollView>

    </HomeLongforWrapper>
  )
})

HomeLongfor.propTypes = {
  itemData: PropTypes.object
}

export default HomeLongfor