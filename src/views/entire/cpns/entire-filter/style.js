import styled from 'styled-components'

export const FilterWrapper = styled.div`
  .filter {
    // 固定定位
    position: fixed;
    z-index: 9;
    top: 80px;
    left: 0;
    right: 0;

    display: flex;
    // 添加高度
    height: 48px;
    padding: 10px 16px;
    border-bottom: 1px solid #f2f2f2;
    background-color: #fff;

    .filter-item {
      margin-right: 15px;
      padding: 6px 12px;
      border: 1px solid #dce0e0;
      border-radius: 5px;
      color: #484848;
      cursor: pointer;

      &.active {
        background: #008489;
        border: 1px solid #008489;
        color: #ffffff;
      }
    }
  }
`
