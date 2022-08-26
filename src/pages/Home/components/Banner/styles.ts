import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: 10rem;
`

export const BrandingTitleContainer = styled.div`
  width: 90%;
  p {
    font-size: 1.25rem;
    width: 90%;
  }
  h1 {
    line-height: 130%;
    font-family: 'Baloo 2';
    font-size: 3rem;
    color: ${(props) => props.theme.baseTitle};
    margin-bottom: 1rem;
  }
`

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5.875rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 6.75rem;
  section:first-of-type {
  }
`

export const BrandingItemsContainer = styled.div`
  display: grid;
  width: 38rem;
  margin-top: 5.125rem;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
  flex-wrap: wrap;
`
