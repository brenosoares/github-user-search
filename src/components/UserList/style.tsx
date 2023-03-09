import { styled } from "@stitches/react"

export const UserListContent = styled('div', {
    alignItems: 'stretch',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    margin: '0 auto',
    width: '90%',
})

export const UserListCard = styled('div', {
    boxShadow: '0px 0px 6px rgba(0, 0, 0, 1)',
    backgroundColor: 'rgba(20,25,32,1)',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    display: 'block',
    margin: '1%',
    padding: '0.5rem',
    width: '18%',
    '& h3': {
        color: 'rgba(243,158,16,1)',
        textAlign: 'center',
    }, 
    '&:hover': {
        backgroundColor: 'rgba(63,77,96, 1)',
    }
})

export const UserAvatar = styled('img', {
    borderRadius: '0.5rem',
    display: 'block',
    width: '100%'
})
