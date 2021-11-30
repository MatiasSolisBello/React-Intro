import React from 'react'
import { useLocation } from 'react-router';
import useAuth from '../auth/useAuth'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const userCredentials = {};

export default function LoginPage() {
    const location = useLocation();
    const { login } = useAuth();
    return (
        <div>
            <Container>
                <Row className="mt-4">
                    <Col xs={12} >
                        <Card style={{ maxWidth: '390px' }} className="mx-auto p-4">

                            <h1 className="text-center">Login</h1>

                            {/* */}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type="email" placeholder="Ingrese correo" />
                            </Form.Group>

                            {/* */}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password" placeholder="Ingrese contraseña" />
                            </Form.Group>

                            {/* */}
                            <Button onClick={() =>
                                login(
                                    userCredentials,
                                    location.state?.from
                                )}
                                variant="primary">
                                Ingrese
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
