import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .i-content {
    display: flex;
    position: relative;
    transition: transform 200ms ease;

    // 让下面的元素都不缩放
    > * {
      flex-shrink: 0;
    }
  }
`