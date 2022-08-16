import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Button, Col, Container, Row, Form, InputGroup } from 'react-bootstrap';
import { searchUsers } from '../../helpers/api';
import { UserSearch, UserSearchItem } from '../../model/user';
import Navigation from '../../components/Navigation/Navigation';

import './ListUsers.scss';

const ListUsers: React.FunctionComponent = (props) => {
  const {username} = useParams();
  const [user, setUser] = useState<string>(username || '');
  const [userList, setUserList] = useState<UserSearch>();
  const [page, setPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(20);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [invalidSearchInput, setInvalidSearchInput] = useState(false);
  

  useEffect(() => {
    if (username) {
      const getUsers = async () => {
        await searchUsers(username, itemsPerPage, page).then(
          res => {
          setUserList(res.data);
          setTotalItems(res.data.total_count || 0);
        });
      }
      getUsers();
    }

  }, [username]);

  const handleSearch = async() => {
    if(user) {
      await searchUsers(user, itemsPerPage, page).then(
        res => {
        setUserList(res.data);
        setTotalItems(res.data.total_count || 0);
      });
      setInvalidSearchInput(false);
    }
    else {
      setInvalidSearchInput(true);
    }
  }

  const renderListUsers = () => {
    if(userList) {
      return (
          userList.items.map((user: UserSearchItem, index) => {
            return (<Col xs={6} sm={4} md={3} xl={2} key={user.id} className="user-item" onClick={}>
              <Row className="justify-content-center">
                <Col>
                  <div className="user-avatar">
                    <img src={user.avatar_url} alt={user.login} />
                  </div>
                </Col>
                <Col xs={12} className="text-center">
                  <h3>{user.login}</h3>
                </Col>
              </Row>
            </Col>)
          })
        )
    }
    return <div>Nenhum resultado encontrado...!</div>;
  }

  const handlePageChange = async (page: number) => {
    setPage(page);
    await searchUsers(user, itemsPerPage, page).then(
      res => {
      setUserList(res.data);
      setTotalItems(res.data.total_count || 0);
    });
  }


  
  return (
    <Container fluid>
      <Row>
          <Col xs={12} className="text-center">
              <h1>GitHub Users</h1>
          </Col>
      </Row>
      <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
              <InputGroup className="mb-3">
                  <Form.Control
                      placeholder="Find a user"
                      aria-label="Find a user"
                      aria-describedby="search-user-input"
                      isInvalid={invalidSearchInput}
                      value={user}
                      onKeyDown={(e) => {
                          e.key === 'Enter' && handleSearch();
                      }}  
                      onChange={(e) => {
                          setUser(e.target.value);
                      } }
                  />  
                  <Button variant="primary" onClick={() => handleSearch()}>
                      Search
                  </Button>
              </InputGroup>
          </Col>
      </Row>
      <Row className='justify-content-center'>
          {renderListUsers()}
      </Row>
      <Row className='justify-content-center mt-4'>
        <Col xs="auto">
          {userList && <Navigation perPage={itemsPerPage} totalItems={totalItems} currentPage={page} onPageChanged={(w) => {handlePageChange(w)}} /> }
        </Col>
      </Row>
    </Container>
  );
};

export default ListUsers;
