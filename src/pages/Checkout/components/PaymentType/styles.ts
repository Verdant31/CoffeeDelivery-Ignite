import styled from 'styled-components'

export const PaymentTypeContainer = styled.div`
  margin-top: 0.875rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.baseCard};
`

export const TitleContainer = styled.form`
  display: flex;
  gap: 0.5rem;
  border-radius: 6px;
  margin-bottom: 2rem;
  div p:nth-of-type(1) {
    color: ${(props) => props.theme.baseSubTitle};
  }
  div p:nth-of-type(2) {
    font-size: 0.875rem;
  }
`
export const PaymentOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;

  div {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme.baseButton};
    padding: 1rem;
    gap: 0.875rem;
    border-radius: 8px;
    min-width: 11.1668rem;
    p {
      font-size: 0.75rem;
    }
  }
`
