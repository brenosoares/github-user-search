import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const UserDetail: React.FunctionComponent = (props) => {
  return (
    <Container fluid>
        <Row>
            <Col xs={3}>
                <Button variant="info">Voltar</Button>
            </Col>
        </Row>

    </Container>
  );
};

export default UserDetail;
