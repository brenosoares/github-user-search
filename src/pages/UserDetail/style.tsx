import { styled } from "@stitches/react"

export const UserCardDetail = styled('div', {
    display: 'block',
    padding: '1rem',
    width: '100%',
})

export const UserCardDetailHeader = styled('div', {
    display: 'flex',
    flexFlow: 'wrap',
    margin: '0 auto',
    maxWidth: '600px',
    width: '100%',
})

export const UserCardDetailHeaderContent = styled('div', {
    alignItems: 'stretch',
    display: 'flex',
    width: '100%',
    '& h1': {
        color: 'rgb(243, 158, 16)',
        margin: '0 0 1rem',
    }
})

export const BackButton = styled('div', {
    cursor: 'pointer',
    display: 'block',
    height: '34px',
    padding: '0.5rem',
    width: '100px',
    '&:hover': {
        opacity: '0.7'
    }
})

export const UserCardDetailImage = styled('img', {
    backgroundColor: 'rgb(20, 25, 32)',
    borderRadius: '0.5rem 0 0 0.5rem',
    display: 'block',
    height: '100%',
    objectFit: 'cover',
    width: '200px',
})

export const UserCardDetailInfo = styled('div', {
    backgroundColor: 'rgb(20, 25, 32)',
    borderRadius: '0 0.5rem 0.5rem 0',
    display: 'block',
    flex: '1',
    padding: '0.5rem'
})

export const UserInfos = styled('div', {
    alignItems: 'center',
    display: 'flex',
    marginBottom: '10px',
    '& a': {
        color: '#ccc',
        fontSize: '14px'
    }
})
export const UserInfosIcon = styled('div', {
    marginRight: '10px',
})
export const UserInfosText = styled('div', {
    fontSize: '14px',
})

export const UserRepoList = styled('div', {
    alignItems: 'stretch',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '1rem auto',
    maxWidth: '800px',
    width: '100%'
})

export const UserRepoItem = styled('div', {
    border: '1px solid rgb(68,73,80)',
    borderRadius: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    margin: '0.5rem 0',
    padding: '0.5rem',
    width: '49%',
})

export const UserRepoItemHeader = styled('div', {
    display: 'block',
    marginBottom: '0.5rem',
    '& a': {
        color: 'rgb(243, 158, 16)'
    }
})

export const UserRepoItemContent = styled('div', {
    display: 'block',
    height: '45px',
    fontSize: '12px',
    letterSpacing: '0.2px',
    marginBottom: '0.5rem',
    overflow: 'hidden',
})
export const UserRepoItemFooter = styled('div', {
    alignItems: 'center',
    display: 'flex',
    marginTop: 'auto',
})

export const UserRepoItemFooterInfos = styled(UserInfos, {
    fontSize: '14px',
    marginBottom: '0',
    marginRight: '0.5rem',
    '& img': {
        marginRight: '5px',
    }
})