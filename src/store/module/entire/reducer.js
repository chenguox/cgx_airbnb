import * as actionTypes from './constancts'

const initialState = {
  currentPage: 0, // 当前页码
  roomList: [], // 房间列表
  totalCount: 0, // 总数据个数
  isLoading: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage}
    case actionTypes.CHANCE_ROOM_LIST:
      return { ...state, roomList: action.roomList }
    case actionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    case actionTypes.CHANGE_IS_LOADING:
      return { ...state, isLoading: action.isLoading }
    default:
      return state
  }
}

export default reducer