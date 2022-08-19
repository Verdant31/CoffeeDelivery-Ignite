import { ReactNode } from 'react'
import { IconContainer, TextContainer } from './styles'

interface BrandingTextProps {
  icon: ReactNode
  text: string
  bgColor: 'darkYellow' | 'yellow' | 'black' | 'purple'
}

export function BrandingText({ icon, text, bgColor }: BrandingTextProps) {
  return (
    <TextContainer>
      <IconContainer bgColor={bgColor}>{icon}</IconContainer>
      <p>{text}</p>
    </TextContainer>
  )
}
