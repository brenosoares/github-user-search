import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserSearchItem } from '../../model/user'
import ErrorMessage from '../../stylesComponents/ErrorMessage'
import { Loading } from '../Loading/Loading'
import { UserAvatar, UserListCard, UserListContent } from './style'

type Props = {
  userList?: UserSearchItem[],
  isLoading: boolean,
  errorMessage: string
}

export const UserList = ({userList, isLoading, errorMessage}: Props) => {

  let navigate = useNavigate();

  const renderListUsers = () => {
    if(userList) {
      return (
          userList.map((user: UserSearchItem) => {
            return (
            <UserListCard key={user.id} onClick={() => navigate(`/user-detail/${user.login}`)}>
              <h3>{user.login}</h3>
              <UserAvatar src={user.avatar_url} alt={user.login} />
            </UserListCard>
            )
          })
        )
    }
    return <div></div>;
  }

  if(!!errorMessage){
    return <ErrorMessage message={errorMessage} />;
  }
  
  return (
    <UserListContent>
      {isLoading ? <Loading /> : renderListUsers()}
    </UserListContent>
  )
}