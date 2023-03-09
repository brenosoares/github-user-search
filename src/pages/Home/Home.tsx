import React, {useEffect, useState} from 'react';
import { Header } from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { UserList } from '../../components/UserList/UserList';
import { UserSearch } from '../../model/user';
import { searchUsers } from '../../services/api';

import Container from '../../stylesComponents/Container';
import ErrorMessage from '../../stylesComponents/ErrorMessage';




const Home: React.FunctionComponent = () => {
    const [username, setUsername] = useState('');
    const [invalidSearchInput, setInvalidSearchInput] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const [userListResponse, setUserListResponse] = useState<UserSearch>();
    const [page, setPage] = useState<number>(1);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [errorMessage, setErrorMessage] = useState('');

    const itemsPerPage = 20;

    const getUsers = async () => {
        setLoading(true)
        await searchUsers(username, itemsPerPage, page).then(
          response => {
          setUserListResponse(response.data);
          setTotalItems(response.data.total_count || 0);
          if(response.data.total_count === 0) {
            setErrorMessage('No results found!')
          }else{
            setErrorMessage('')
          }
        }).catch(error => {
          setErrorMessage(error.message);
        }).finally(() => {
          setLoading(false);
        });
        return userListResponse
    }

    const handleSearch = () => {
        setInvalidSearchInput(false);
        if (!!username){
            getUsers()
        }
    }

    useEffect(() => handleSearch(),[page]);

  return (
    <Container>
        <Header />
        <SearchBar 
            username={username} 
            change={(event) => setUsername(event.target.value)}
            keyDown={(event) => event.key === 'Enter' && handleSearch()}
            click={() => handleSearch()}
        />
        {invalidSearchInput ? <ErrorMessage message="Username invalid!" /> : null}
        <UserList userList={userListResponse?.items} isLoading={loading} errorMessage={errorMessage} />
        {loading ? null : <Navigation currentPage={page} perPage={itemsPerPage} onPageChanged={(pageCurr)=> setPage(pageCurr)} totalItems={totalItems} />}
    </Container>
  );
};

export default Home;
