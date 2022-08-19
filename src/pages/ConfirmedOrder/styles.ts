import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  margin-top: 5rem;
  section:nth-of-type(1) {
    min-width: 32.875rem;
  }
  gap: 6.56rem;
`

export const Title = styled.p`
  font-size: 2rem;
  font-family: 'Baloo 2';
  font-weight: bold;
  color: ${(props) => props.theme.brandYellowDark};
`
export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3.125rem;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid transparent;
  background: linear-gradient(
        ${(theme) => theme.theme.baseBackground},
        ${(theme) => theme.theme.baseBackground}
      )
      padding-box,
    linear-gradient(
        135deg,
        ${(theme) => theme.theme.brandYellow},
        ${(theme) => theme.theme.brandPurple}
      )
      border-box;
`
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 15rem;
  gap: 0.75rem;
  p {
    font-size: 1rem;
  }
  span {
    font-weight: bold;
  }
`

const BG_COLORS = {
  darkYellow: 'brandYellowDark',
  yellow: 'brandYellow',
  black: 'baseText',
  purple: 'brandPurple',
} as const

interface IconContainerProps {
  bgColor: 'darkYellow' | 'yellow' | 'black' | 'purple'
}

export const IconContainer = styled.div<IconContainerProps>`
  padding: 0.5rem;
  border-radius: 9999px;
  line-height: 0;
  color: ${(props) => props.theme.brandYellowDark};
  background: ${(props) => props.theme[BG_COLORS[props.bgColor]]};
`
