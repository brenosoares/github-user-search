import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row, Form, InputGroup } from 'react-bootstrap';
import HomeImg from '../../assets/home-img.png';

import './Home.scss';

const Home: React.FunctionComponent = () => {
    const [username, setUsername] = useState('');
    const [invalidSearchInput, setInvalidSearchInput] = useState(false);
    let navigate = useNavigate();

    const handleSearch = () => {
        username &&
        navigate(`/search-list/${username}`) || setInvalidSearchInput(true);
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
                        value={username}
                        onKeyDown={(e) => {
                            e.key === 'Enter' && handleSearch();
                        }}  
                        onChange={(e) => {
                            setUsername(e.target.value);
                        } }
                    />  
                    <Button variant="primary" onClick={() => handleSearch()}>
                        Search
                    </Button>
                </InputGroup>
            </Col>
        </Row>
        <Row>
            <Col className="justify-content-md-center">
                <div className="home-img">
                    <img src={HomeImg} alt="GitHub Users" />
                </div>  
            </Col>
        </Row>
    </Container>
  );
};

export default Home;
