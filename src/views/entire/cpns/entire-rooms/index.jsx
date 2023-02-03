import RoomItem from '@/components/room-item'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { RoomsWrapper } from './style'

const EntireRooms = memo((props) => {
  const { roomList, totalCount, isLoading } = useSelector((state) => {
    return {
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading
    }
  }, shallowEqual)

  console.log('roomList:', roomList)

  return (
    <RoomsWrapper>
      <h2 className='title'>{totalCount}多处住所</h2>
      <div className='list'>
        {roomList.map((item) => {
          return <RoomItem itemData={item} key={item._id} itemWidth="20%" />
        })}
      </div>
      { isLoading && <div className='cover'></div>}
    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms
