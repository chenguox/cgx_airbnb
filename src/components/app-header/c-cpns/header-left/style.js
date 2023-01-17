import styled from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  /* background-color: cyan; */
  color: ${(props) => props.theme.color.primaryColor};
`
