import PropTypes from 'prop-types'
import React, { memo } from 'react'

import Pagination from '@mui/material/Pagination'

import { PaginationWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPageAction, fetchRoomListAction } from '@/store/module/entire/actionCreaters'

const EntirePagination = memo((props) => {
  const { totalCount, currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList,
  }))

  // 小算法：必须掌握
  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1 ) * 20

  // 事件处理的逻辑
  const dispatch = useDispatch()
  function handleChange(event, pageCount) {
    // 回到顶部
    window.scrollTo(0, 0)
    // 更新最新的页码： redux => currentPage
    // dispatch(changeCurrentPageAction(pageCount - 1))
    dispatch(fetchRoomListAction(pageCount - 1))
  }

  return (
    <PaginationWrapper>
      <div className="info">
        <Pagination count={totalPage} color="primary" onChange={handleChange} />
        <div className="desc">第 { startCount } - { endCount } 个房源，共超过 {totalCount} 个</div>
      </div>
    </PaginationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination
