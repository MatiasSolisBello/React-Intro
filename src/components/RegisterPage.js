import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import React, { useState } from "react";
import { Redirect } from 'react-router-dom';

//import registerResolver from '../validations/registerResolver';

export default function RegisterPage() {
    const [rut, setRut] = useState('');
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const [redirect, setRedirect] = useState(false);

    //resolver
    //const { register, formState: { errors } } = useForm({ resolver: registerResolver });

    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                rut,
                nombre,
                correo,
                clave
            })
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/login" />;
    }

    return (
        <div>
            <Container>
                <Row className="mt-4">
                    <Col xs={12}>
                        <Card style={{ maxWidth: '390px' }} className="mx-auto p-4">

                            <h1 className="text-center">Registrese</h1>


                            <Form onSubmit={submit}>

                                {/* Rut */}
                                <Form.Group className="mb-3">
                                    <Form.Label>RUT:</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese su rut" name="rut" id="rut"
                                        onChange={e => setRut(e.target.value)}
                                    />

                                </Form.Group>

                                {/* Nombre */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre:</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese su nombre" name="nombre" id="nombre"
                                        onChange={e => setNombre(e.target.value)}
                                    />
                                    {/* {errors?.nombre && (
                                        <Form.Text>
                                            <Alert variant="danger">
                                                {errors.nombre.message}
                                            </Alert>
                                        </Form.Text>
                                    )}*/}

                                </Form.Group>


                                {/* Correo */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Correo:</Form.Label>
                                    <Form.Control type="email" placeholder="Ingrese correo" name="correo" id="correo"
                                        onChange={e => setCorreo(e.target.value)}
                                    />
                                </Form.Group>

                                {/* Password */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" placeholder="Ingrese contraseña" name="clave" id="clave"
                                        onChange={e => setClave(e.target.value)}
                                    />

                                </Form.Group>


                                {/* */}
                                <Button
                                    variant="primary"
                                    type="submit"
                                >Registro
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
