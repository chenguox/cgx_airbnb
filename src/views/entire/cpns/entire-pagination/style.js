import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiPaginationItem-icon {
      font-size: 24px;
    }

    .MuiPaginationItem-page{
      margin-right: 10px;

      &:hover {
        text-decoration: underline;
      }
    }

    .MuiPaginationItem-textPrimary.Mui-selected {
      background-color: #000;
    }

    .desc {
      margin-top: 16px;
      color: #222;
    }
  }

`