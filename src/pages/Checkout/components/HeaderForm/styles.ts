import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  border-radius: 6px;
  margin-bottom: 2rem;
  background: ${(props) => props.theme.baseCard};
  div p:nth-of-type(1) {
    color: ${(props) => props.theme.baseSubTitle};
  }
  div p:nth-of-type(2) {
    font-size: 0.875rem;
  }
`
