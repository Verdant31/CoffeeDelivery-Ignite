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
  margin-bottom: 6.75rem;
  section:first-of-type {
  }
`

export const BrandingItemsContainer = styled.div`
  display: flex;
  margin-top: 5.125rem;
  gap: 2.5rem;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
  flex-wrap: wrap;
`
