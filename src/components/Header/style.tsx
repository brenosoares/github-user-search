import { styled } from "@stitches/react"

export const HeaderContent = styled('header', {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column',
    padding: '1rem',
    width: '100%',
    '& h1': {
        color: '#FFFFFF',
        fontSize:   '2rem',
        margin: '0',
        textAlign: 'center',
    },
    '& img': {
        width: '40px',
    },
    '& p': {
        fontSize: '1rem',
        margin: '0',
    }
})