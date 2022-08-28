import styled from 'styled-components'

export const Container = styled.form`
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

export const AddressFormContainer = styled.div`
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

interface InputProps {
  width?: string
  mr?: string
}

export const WrapInputs = styled.div`
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
`

export const FormInput = styled.input<InputProps>`
  width: ${(props) => props.width};
  height: 2.652rem;
  background: ${(props) => props.theme.baseInput};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.baseButton};
  padding: 0.75rem;
  flex-grow: ${(props) => (props.width ? '0' : '1')};
  margin-right: ${(props) => props.mr};
  margin-bottom: 1rem;

  ::placeholder {
    color: ${(props) => props.theme.baseLabel};
  }
  :focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.brandYellowDark};
    ::placeholder {
      color: transparent;
    }
  }
`
interface FormOptionalInputProps {
  hasFocus: boolean
}
export const FormOptionalInput = styled.div<FormOptionalInputProps>`
  display: flex;
  flex-grow: 1;
  position: relative;

  input {
    position: relative;
    width: 100%;
    height: 2.652rem;
    background: ${(props) => props.theme.baseInput};
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.baseButton};
    padding: 0.75rem;
    margin-bottom: 1rem;
    :focus {
      ::placeholder {
        color: transparent;
      }
    }
  }
  i {
    position: absolute;
    top: 14px;
    right: 16px;
    font-size: 0.75rem;
    color: ${(props) => props.theme.baseLabel};
  }
  i {
    display: ${(props) => props.hasFocus && 'none'};
  }
`
