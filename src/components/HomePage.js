import { Container, Row, Col, Button } from 'react-bootstrap';
import routes from '../helpers/routes';
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <Container>
            <Row className="mt-5">
                <Col xs={{ span: 12 }} md={{ span: 6 }} className="text-center">
                    <h2>Bienvenid@ a Sistema Contable</h2>
                    <p>¡Aquí podrás gestionar tus productos!</p>
                    <div>
                        <Link to={routes.login}>Ingresa</Link> o <Button as={Link} to={routes.register}
                            className="ml-1"
                        >Crea una cuenta</Button>
                    </div>
                </Col>
                <Col>
                    <img style={{ width: '80%' }}
                        className="img-fluid"
                        src="/img/task-manager.svg"
                        alt="gestor-de-tareas"
                    />
                    <p>¡Gestiona tu tiempo, mejora tu proactividad!</p>
                </Col>
            </Row>
        </Container>
    );
}