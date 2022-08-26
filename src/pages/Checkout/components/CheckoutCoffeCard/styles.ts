import styled from 'styled-components'

export const CheckoutCardContainer = styled.div`
  display: flex;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.baseButton};
  gap: 1.25rem;
  img {
    width: 4rem;
    height: 4rem;
  }
`
export const PriceText = styled.p`
  align-self: flex-start;
  font-weight: bold;
  margin-left: auto;
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  gap: 0.5rem;
  button {
    display: flex;
    align-items: center;
    border: none;
    text-decoration: none;
    gap: 0.25rem;
    background: ${(props) => props.theme.baseButton};
    padding: 0.40625rem 0.5rem;
    border-radius: 6px;
    transition: 0.3s;
    :hover {
      background: ${(props) => props.theme.baseHover};
    }
    p {
      font-size: 0.75rem;
    }
  }
`
