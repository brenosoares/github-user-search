import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Pagination, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser, getUserRepos } from '../../helpers/api';
import { User, UserRepo } from '../../model/user';
import './UserDetail.scss'
import iconLink from '../../assets/icon-link.svg';
import iconFollowers from '../../assets/icon-followers.svg';
import iconRepo from '../../assets/icon-repo.svg';

const UserDetail: React.FunctionComponent = () => {
    let navigate = useNavigate();
    const { username } = useParams();
    const [userDetail, setUserDetail] = useState<User>();
    const [userRepos, setUserRepos] = useState<Array<UserRepo>>();
    const [page, setPage] = useState<number>(1);
    const itemsPerPage = 20;

    

    /* eslint-disable no-unused-expressions */
    useEffect(() => {
        if(username) {
        getUser(username)
            .then(res => {
                setUserDetail(res.data);
            }).catch(err => {
                console.log(err);
            });
        getUserRepos(username, itemsPerPage, page)
            .then(res => {
                setUserRepos(res.data);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [username, page]);
    

  return (
    <Container fluid>
        <Row>
            <Col xs={3}>
                <Button variant="info" onClick={() => navigate(-1)}>Voltar</Button>
            </Col>
            <Col>
                <h1>GitHub User Detail</h1>
            </Col>
        </Row>
        {userDetail &&
            <Row className='user-details p-4'>
                <Col xs="auto">
                    <div className="avatar">
                        <img src={userDetail.avatar_url} alt={userDetail.name} />
                    </div>
                </Col>
                <Col>
                    <h2>{userDetail.name}</h2>
                    <div className="bio">
                        {userDetail.bio}
                    </div>
                    <div className="user-info">
                        <div className="user-info-item">
                            <div className="icon"><img src={iconLink} alt="Link" /></div>
                            <div className="text"><a href={userDetail.html_url} target="_blank">{userDetail.html_url}</a></div>
                        </div>
                        <div className="user-info-item">
                            <div className="icon"><img src={iconFollowers} alt="Followers and Following" /></div>
                            <div className="text"> {userDetail.public_repos} Followers</div>
                            <div className="text"> • </div>
                            <div className="text"> {userDetail.followers} Following</div>
                        </div>
                        <div className="user-info-item">
                        </div>
                    </div>
                </Col>
            </Row>
        }
        {userRepos && 
            <Row className='repos p-4'>
                <Col xs={12}>
                    <h3>Repositórios</h3>
                    <div className="repos-list">
                        {userRepos && userRepos.map((repo: any) => (
                            <div className="repo-item" key={repo.id}>
                                <div className="repo-item-name">{repo.name}</div>
                                <div className="repo-item-description">{repo.description}</div>
                            </div>
                        ))}
                    </div>
                </Col>
            {userRepos.length <= 0 && <div className="loading">Nenhum repositório encontrado...</div>}
                <Col xs={12}>
                <Row className='justify-content-center mt-4'>
                    <Col xs="auto">
                    <Pagination>
                        <Pagination.Prev disabled={page <= 1} onClick={() => setPage(page-1)}/>
                        <Pagination.Next disabled={userRepos.length <= 0} onClick={() => setPage(page+1)}/>
                    </Pagination>
                    </Col>
                </Row>
                </Col>
            </Row>
    }

    </Container>
  );
};

export default UserDetail;
