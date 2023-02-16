import styled from 'styled-components'

export const RoomsWrapper = styled.div`
  position: relative;
  padding: 40px 16px;
  margin-top: 128px;

  .title {
    font-weight: 600;
  }

  .list {
    display: flex;
    flex-wrap: wrap;

    margin-left: -8px;
  }

  > .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255,255,255,.8);
  }
`
