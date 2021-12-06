import { useState, useEffect } from "react";
import { Card, Button, Container, Row } from 'react-bootstrap'


export default function ProductoPage() {
    /*const ProductoList = () => {*/
    const [data, setProducto] = useState([]);
    //const navigate = useNavigate();

    const loadProducto = async () => {
        const response = await fetch("http://localhost:5000/api/producto");
        const data = await response.json();
        console.log(data)
        setProducto(data);
    };

    useEffect(() => {
        loadProducto();
    }, []);
    //}


    return (
        <>
            <br></br>
            <h1 className="text-center">Productos</h1>

            <Container>
                <Row xs={1} md={4} className="g-4">
                    {data.map((pro) => (

                        <Card >
                            <Card.Img variant="top" src={pro.imagen} />
                            <Card.Body>
                                <Card.Title>{pro.nombre}</Card.Title>
                                <Card.Text>
                                    {pro.descripcion}
                                </Card.Text>
                                <Card.Text>
                                    ${pro.precio}
                                </Card.Text>
                                <Card.Text>
                                    {pro.stock}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>


                    ))}
                </Row>
            </Container>
        </>
    );
}
