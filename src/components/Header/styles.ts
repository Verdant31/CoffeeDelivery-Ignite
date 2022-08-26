import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding-top: 2rem;
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem 0.7rem;
  gap: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.brandPurpleLight};
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.brandPurpleDark};
  }
`

export const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 0.75rem;
  height: 2.375rem;
  a {
    padding: 0.5rem;
    border-radius: 6px;
    line-height: 0;
    color: ${(props) => props.theme.brandYellowDark};
    background: ${(props) => props.theme.brandYellowLight};
    color: '#fff';
  }
  strong {
    position: absolute;
    top: -8px;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -10px;
    border-radius: 50%;
    color: #fff;
    background: ${(props) => props.theme.brandYellowDark};
    width: 1.25rem;
    height: 1.25rem;
    font-size: 0.875rem;
  }
`
