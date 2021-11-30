import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import RegisterResolver from '../validations/registerResolver'

export default function RegisterPage() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: RegisterResolver
    });

    const onSubmit = (formData) => {
        alert("Registrado");
        console.log(formData)
    }

    return (
        <div>
            <Container>
                <Row className="mt-4">
                    <Col xs={12}>
                        <Card style={{ maxWidth: '390px' }} className="mx-auto p-4">

                            <h1 className="text-center">Registrese</h1>


                            <Form onSubmit={handleSubmit(onSubmit)}>

                                {/* Rut */}
                                <Form.Group className="mb-3">
                                    <Form.Label>RUT:</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese su rut"
                                        {...register("rut")}
                                    />
                                    {errors?.rut && (
                                        <Form.Text>
                                            <Alert variant="danger">
                                                {errors.rut.message}
                                            </Alert>
                                        </Form.Text>
                                    )}
                                </Form.Group>

                                {/* Nombre */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre:</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese su nombre"
                                        {...register("nombre")}
                                    />
                                    {errors?.nombre && (
                                        <Form.Text>
                                            <Alert variant="danger">
                                                {errors.nombre.message}
                                            </Alert>
                                        </Form.Text>
                                    )}
                                </Form.Group>


                                {/* Correo */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Correo:</Form.Label>
                                    <Form.Control type="email" placeholder="Ingrese correo"
                                        {...register("correo")}
                                    />
                                    {errors?.correo && (
                                        <Form.Text>
                                            <Alert variant="danger">
                                                {errors.correo.message}
                                            </Alert>
                                        </Form.Text>
                                    )}
                                </Form.Group>

                                {/* Password */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" placeholder="Ingrese contraseña"
                                        {...register("clave")}
                                    />
                                    {errors?.clave && (
                                        <Form.Text>
                                            <Alert variant="danger">
                                                {errors.clave.message}
                                            </Alert>
                                        </Form.Text>
                                    )}
                                </Form.Group>


                                {/* */}
                                <Button 
                                    variant="primary" 
                                    onClick={handleSubmit(onSubmit)}
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
