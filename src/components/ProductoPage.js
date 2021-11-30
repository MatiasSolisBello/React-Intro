import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
//import axios from 'axios'
//import { useEffect } from "react";

export default function ProductoPage() {
    return (
        <div>
            <br></br>
            <h1 className="text-center">Productos</h1>

            <Container>
                <Row xs={1} md={4} className="g-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col>
                            
                                    <Card>
                                        <Card.Img variant="top" src="holder.js/100px160" />
                                        <Card.Body>
                                            <Card.Title>ddw</Card.Title>
                                            <Card.Text>
                                                This is a longer card with supporting text below as a natural
                                                lead-in to additional content. This content is a little bit longer.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
