import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;

  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme.baseCard};

  h1 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.baseLabel};
    text-align: center;
    padding-inline: 1.25rem;
  }
  img {
    margin-top: -1.5625rem;
  }
`

export const TagText = styled.h1`
  background: ${(props) => props.theme.brandYellowLight};
  color: ${(props) => props.theme.brandYellowDark};
  padding: 0.4rem;
  padding-inline: 0.6rem;
  border-radius: 100px;
  margin-top: 0.75rem;
`

export const CardFooter = styled.footer`
  position: absolute;
  bottom: 20px;
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  span {
    flex: 1;
  }
  span span {
    font-size: 1.5rem;
    font-family: 'Baloo 2';
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.6rem;
    border-radius: 6px;
    margin-right: 0.5rem;
    background: ${(props) => props.theme.baseButton};
    svg {
      color: ${(props) => props.theme.brandPurple};
    }
  }
  button {
    text-decoration: none;
    border: none;
    border-radius: 6px;
    line-height: 0;
    padding: 0.4rem;
    background-color: ${(props) => props.theme.brandPurpleDark};
    transition: 0.3s;
  }
  button:hover {
    background-color: ${(props) => props.theme.brandPurple};
  }
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 1rem;
  h1 {
    font-size: 0.625rem;
    margin-bottom: 0.5rem;
  }
`
