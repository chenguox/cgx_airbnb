import styled from "styled-components";

export const TabWrapper = styled.div`
  display: flex;

  

  .item {
    /* background-color: darkcyan; */

    
    padding: 8px 16px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #d8d8d8;

    cursor: pointer;

    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
  }


`