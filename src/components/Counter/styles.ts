import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.34375rem 0.5rem;
  border-radius: 6px;
  margin-right: 0.5rem;

  background: ${(props) => props.theme.baseButton};
  svg {
    color: ${(props) => props.theme.brandPurple};
  }
  svg:hover {
    color: ${(props) => props.theme.brandPurpleDark};
  }
`
