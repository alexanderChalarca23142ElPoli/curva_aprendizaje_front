import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Card, Container } from "react-bootstrap";

const View = () => {
  const currentId = useParams();
  const { id } = currentId;
  const { users: data } = useSelector((state) => state.data);
  return (
    <Container className="mt-5">
      {Object.keys(data).map((obj) => {
        if (obj === id) {
          return (

            <Card className="text-center">
              <Card.Header>Detalle Usuario</Card.Header>
              <Card.Body>
                <Card.Title>Nombre: {data[id].fullName}</Card.Title>
                <Card.Text>Telefono: {data[id].mobile}</Card.Text>
                <Card.Text>Correo: {data[id].email}</Card.Text>
                <Card.Text>Dirección: {data[id].address}</Card.Text>
                <Link to="/">
                  <Button variant="primary">Regresar</Button>
                </Link>
              </Card.Body>
            </Card>

          );
        }
      })
      }
    </Container>

  );
};

export default View;
