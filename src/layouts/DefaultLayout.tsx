import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../components/Header'

export const Container = styled.div`
  margin-inline: 10rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
`

export function DefaultLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}
