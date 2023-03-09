import { styled } from "@stitches/react"

export const Pagination = styled('div', {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem auto',
    maxWidth: '600px',
    width: '100%',
})

export const Prev = styled('div', {
    backgroundColor: 'rgb(243, 158, 16)',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    height: '30px',
    margin: '0 1rem',
    width: '30px',
    variants: {
        disabled:{
            true:{
                backgroundColor: 'rgb(255, 255, 2556)',
                cursor: 'auto',
                opacity: '0.5',
            }
        }
    }
})

export const Next = styled(Prev, {})

export const Item = styled('div', {
    cursor: 'pointer',
    padding: '0.5rem',
    '&:hover':{
        color: 'rgb(243, 158, 16)'
    },
    variants:{
        active:{
            true:{
                color: 'rgb(243, 158, 16)'
            }
        }
    }
})
export const Ellipsis = styled('div', {})