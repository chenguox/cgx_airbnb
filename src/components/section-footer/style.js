import styled from "styled-components";

export const FooterWrapper = styled.div`
  // 设置display让内容不再是独占一行， 不会让鼠标在空白处有小手
  display: flex;
  margin-top: 10px;

  .info {
    display: flex;
    align-items: center;
    cursor: pointer;

    font-size: 17px;
    font-weight: 700;
    color: ${props => props.color};

    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 6px;
    }
  }
` 