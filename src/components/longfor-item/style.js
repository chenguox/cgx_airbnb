import styled from 'styled-components'

export const ItemWrapper = styled.div`
  width: 20%;
  flex-shrink: 0;

  .inner {
    padding: 8px;
  }

  .item-info {
    position: relative;
    border-radius: 3px;
    overflow: hidden;

    .cover {
      width: 100%;
    }

    .bg-cover {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 60%;
      background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)
    }

    .info {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);

      color: #fff;

      display: flex;
      flex-direction: column;
      align-items: center;

      .city {
        font-weight: 600;
        font-size: 20px;
      }

      .price {
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
`
