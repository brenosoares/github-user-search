import { ReactNode } from "react"
import { styled } from "@stitches/react"

const Error = styled('span', {
  backgroundColor: 'rgba(0,0,0,0.3)',
  color: 'rgba(243,103,103,1)',
  display: 'table',
  height: 'auto',
  margin: '0 auto',
  maxWidth: '70%',
  padding: '0.5rem',
  textAlign: 'center',
})

type Props = {
    message: string
  }

const ErrorMessage = ({message}: Props) => {
  return (
    <Error>{message}</Error>
  )
}

export default ErrorMessage