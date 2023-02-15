import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { changeDetailInfoAction } from '@/store/module/detail'

import RoomItem from '@/components/room-item'
import { RoomsWrapper } from './style'
import { useNavigate } from 'react-router-dom'

const EntireRooms = memo((props) => {
  // 从 redux 中获取数据
  const { roomList, totalCount, isLoading } = useSelector((state) => {
    return {
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }
  }, shallowEqual)

  // 事件处理
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const itemClickHandle = useCallback(
    (item) => {
      dispatch(changeDetailInfoAction(item))
      navigate('/detail')
    },
    [navigate, dispatch]
  )

  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount}多处住所</h2>
      <div className="list">
        {roomList.map((item) => {
          return (
            <RoomItem
              itemData={item}
              key={item._id}
              itemWidth="20%"
              itemClick={itemClickHandle}
            />
          )
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms
