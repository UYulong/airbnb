import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionRoomsWrapper } from './style'
import RoomItem from '@/components/RoomItem'

const SectionRooms = memo((props) => {
  const { roomList } = props
  return (
    <SectionRoomsWrapper>
      {
        roomList?.slice(0, 8)?.map(item => {
          return <RoomItem itemData={item} key={item.id} />
        })
      }
    </SectionRoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms