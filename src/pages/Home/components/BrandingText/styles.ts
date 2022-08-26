import styled from 'styled-components'

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  p {
    font-size: 1rem;
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
