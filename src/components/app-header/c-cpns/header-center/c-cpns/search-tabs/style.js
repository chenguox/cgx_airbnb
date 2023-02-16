import styled from "styled-components";

export const TabWrapper = styled.div`
  display: flex;
  color: ${props => props.theme.isAlpha ? "#fff" : "#222"};

  .tab-item {
    position: relative;
    width: 64px;
    height: 20px;
    margin: 10px 16px;

    .tab-text {
      font-size: 16px;
    }

    &.active .bottom {
      position: absolute;
      top: 28px;
      left: 0;
      width: 64px;
      height: 2px;
      /* background-color: #333; */
      background-color: ${props => props.theme.isAlpha ? "#fff" : "#333"};
    }
  }
`