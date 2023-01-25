import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  /* background-color: pink; */
  display: flex;
  justify-content: flex-end;
  align-items: center;

  color: ${(props) => props.theme.text.primaryColor};
  font-weight: 600;

  .btns {
    display: flex;
    align-items: center;
    .btn {
      margin-right: 20px;
    }
  }

  .profile {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;

    border: 1px solid #ccc;
    border-radius: 25px;
    box-sizing: border-box;
    background-color: #fff;
    /* color: ${(props) => props.theme.text.primaryColor}; */
    cursor: pointer;

    ${(props) => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0,0,0,.2);
      color: #666;

      .top, .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
      Q

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`
