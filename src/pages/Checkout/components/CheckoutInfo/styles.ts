import styled from 'styled-components'
interface Props {
  isTotal?: boolean
}
export const CheckoutInfoContainer = styled.div<Props>`
  display: flex;
  justify-content: space-between;

  p {
    font-size: ${(props) => (props.isTotal ? '1.25rem' : '0.875rem')};
    font-weight: ${(props) => (props.isTotal ? 'bold' : '400')};
    margin-bottom: ${(props) => (props.isTotal ? '0px' : '12px')};
  }
`
