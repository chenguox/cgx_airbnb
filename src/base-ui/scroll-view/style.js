import styled from 'styled-components'

export const ViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;

  .control {
    position: absolute;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    /* text-align: center; */
    border: 2px solid #fff;
    /* border-width: 2px;
    border-style: solid;
    border-color: #fff; */
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
    cursor: pointer;
  }

  .left {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }

  .right {
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }


  .scroll {
    overflow: hidden;

    .scroll-content {
      display: flex;
      transition: transform 250ms ease;
    }
  }
`
