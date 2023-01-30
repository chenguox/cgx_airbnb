import styled from 'styled-components'

export const FooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid #ebebeb;

  .footer-content {
    width: 1032px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 48px 24px;

    .service {
      display: flex;
      justify-content: space-between;

      .item {
        flex: 1;
      }

      .name {
        margin-bottom: 16px;
        font-weight: 700;
      }

      .list {
        .iten {
          margin-top: 6px;
          color: #767676;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .statement {
      margin-top: 30px;
      padding: 20px;
      color: #767676;
      text-align: center;
      border-top: 1px solid #ebebeb;
    }
  }
`
