import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 4.5rem;
  justify-content: center;
  gap: 2rem;
  section:nth-of-type(2) h1 {
    font-size: 1.125rem;
    font-family: 'Baloo 2';
    color: ${(props) => props.theme.baseSubTitle};
    margin-bottom: 0.93rem;
  }
`

export const CartContainer = styled.div`
  display: flex;
  padding-inline: 2.5rem;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 29.18rem;
  background: ${(props) => props.theme.baseCard};
  border-radius: 6px 44px 6px 44px;
  padding-block: 2.5rem;
`

export const SubmitOrderButton = styled.button`
  text-decoration: none;
  border: none;
  height: 2.875rem;
  background: ${(props) => props.theme.brandYellow};
  color: #fff;
  border-radius: 6px;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  transition: 0.3s;
  :hover {
    background: ${(props) => props.theme.brandYellowDark};
  }
`

export const AddressFormContainer = styled.form`
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.baseCard};
`
export const AddressContainer = styled.div`
  width: 40rem;

  h1 {
    font-size: 1.125rem;
    font-family: 'Baloo 2';
    color: ${(props) => props.theme.baseSubTitle};
    margin-bottom: 0.93rem;
  }
`
