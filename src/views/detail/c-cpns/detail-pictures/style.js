import styled from 'styled-components'

export const PicturesWrapper = styled.div`
  position: relative;

  > .pictures {
    display: flex;
    height: 600px;
    background-color: #000;

    &:hover {
      // 选中的时候，将所有的 cover 透明度恢复为1， 写上 important 增加权重
      .cover {
        opacity: 1 !important;
      }

      // 对选中的item，让其的遮罩层的透明度为0
      .item:hover {
        .cover {
          opacity: 0 !important;
        }
      }
    }
  }

  .left,
  .right {
    width: 50%;
    height: 100%;

    .item {
      position: relative;
      height: 100%;
      overflow: hidden;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        transition: transform 0.3s ease-in;
      }

      .cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.3);
        // 设置一开始透明度为0，这样不会显示遮罩
        opacity: 0;
        /* 对透明度的变化增加动画效果 */
        transition: opacity 200ms ease;
      }

      &:hover {
        img {
          transform: scale(1.08);
        }
      }
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 50%;
      height: 50%;
      box-sizing: border-box;
      border: 1px solid #000;
    }
  }

  .show-btn {
    position: absolute;
    z-index: 99;
    right: 15px;
    bottom: 15px;
    line-height: 22px;
    padding: 6px 15px;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
  }
`
