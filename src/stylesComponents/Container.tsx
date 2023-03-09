import { ReactNode } from "react"
import { styled } from "@stitches/react"

const Content = styled('div', {
  backgroundColor: '#21272f',
  display: 'block',
  height: 'auto',
  width: '100%'
})

type Props = {
    children: ReactNode
  }

const Container = ({children}: Props) => {
  return (
    <Content>{children}</Content>
  )
}

export default Container