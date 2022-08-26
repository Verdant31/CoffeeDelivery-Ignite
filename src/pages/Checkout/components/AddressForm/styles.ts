import styled from 'styled-components'

export const AddressFormContainer = styled.form`
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.baseCard};
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
