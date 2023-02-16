import styled from 'styled-components'

export const BrowserWrapper = styled.div`
  position: fixed;
  /* 设置层高一点，要在最上面 */
  z-index: 999; // -1 1 9 99 999
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-color: #333;

  display: flex;
  flex-direction: column;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    flex: 1;
    position: relative;

    display: flex;
    justify-content: center;

    .control {
      position: absolute;
      z-index: 1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;

      .btn {
        display: flex;
        width: 83px;
        height: 100%;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }

    .picture {
      position: relative;
      height: 100%;
      width: 100%;
      max-width: 105vh;

      img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        height: 100%;
        margin: 0 auto; // 居中
        user-select: none;
      }

      

    }
  }

  .preview {
    height: 100px;
    display: flex;
    justify-content: center;
    margin-top: 10px;

    .info {
      position: absolute;
      bottom: 10px;

      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        height: ${(props) => (props.showList ? '67px' : '0')};

        .item1 {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`
