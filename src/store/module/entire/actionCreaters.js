import { getEntireRoomList } from "@/services/module/entire"
import * as actionTypes from "./constancts"

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANCE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoading = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

export const fetchRoomListAction = (page = 0) => {
  // 新的函数
  return async (dispatch, getState) => {
    // 0. 修改currentPage
    dispatch(changeCurrentPageAction(page))

    // 1. 根据页码获取最新的数据
    // const currentPage = getState().entire.currentPage
    // const res = await getEntireRoomList(currentPage * 20)
    dispatch(changeIsLoading(true))
    const res = await getEntireRoomList(page * 20)
    // 2. 获取到最新的数据， 保存 redux 的 store 中
    const roomList = res.list
    const totalCount = res.totalCount
    dispatch(changeIsLoading(false))
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
  }
}