import React, { useEffect, useState } from "react";


import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Button, Card, Col, Row } from "react-bootstrap";
import UsersDataTable from "./UsersDataTable";
import { deleteUserStart, getUsersStart } from "../redux/actions";


const ListRecord = () => {
  const { users: data } = useSelector((state) => state.data);
  const [show, setShow] = useState(false);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersStart());
  }, []);

  const onDelete = (id) => {
    if (window.confirm("¿Está seguro de que desea eliminar este registro?")) {
      dispatch(deleteUserStart(id));
      dispatch(getUsersStart());
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="mb-5 mt-5" md="12">
            <Card>
              <Card.Body>Usuarios</Card.Body>
            </Card>
          </Col>
          <Col md="2">
            <Button onClick={() => {setShow(true)}} className="justify-content-start" variant="primary">
              Agregar
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col className="mt-2" md="12">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <UsersDataTable data={data} show={show} setShow={setShow} onClick={onDelete} />
            </Table>
          </Col>
        </Row>

      </Container >
    </>
  );
};

export default ListRecord;
