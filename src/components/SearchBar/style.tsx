import { styled } from "@stitches/react"

export const SearchBarContent = styled('div', {
    backgroundColor: '#FFFFFF',
    borderRadius: '0.5rem',
    boxShadow: '0px 0px 6px rgba(0, 0, 0, 1)',
    display: 'block',
    margin: '2rem auto',
    maxWidth: '800px',
    overflow: 'hidden',
    padding: '0',
    width: '90%'
})

export const SearchBarFieldGroup = styled('div', {
    alignItems: 'stretch',
    display: 'flex',
})
export const SearchBarFieldText = styled('input', {
    appearance: 'none',
    backgroundColor: '#FFFFFF',
    border: '0',
    borderRadius: '0.5rem',
    display: 'block',
    fontSize: '1.2rem',
    height: '100%',
    padding: '1rem',
    width: '100%'
})

export const SearchBarFieldButton = styled('button', {
    appearance: 'none',
    backgroundColor: 'rgba(243, 158, 16, 1)',
    border: '0',
    color: '#FFFFFF',
    cursor: 'pointer',
    width: '4rem',
    '&:hover': {
        backgroundColor: 'rgba(243, 158, 16, 0.9)',
    }
})