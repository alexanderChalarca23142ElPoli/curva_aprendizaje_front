import { isEmpty } from "lodash";
import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Eye, PencilSquare, Trash2 } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addUserStart, editUserStart, getUsersStart } from "../redux/actions";
import Alerts from "./Alerts";




const UsersDataTable = ({ data, onClick, show, setShow }) => {
    const values = {
        fullName: "",
        email: "",
        password: "",
        address: "",
        mobile: "",
    };
    const [initialState, setState] = useState(values);
    const [id, setId] = useState("");
    const [error, setError] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const { fullName, email, password, address, mobile } = initialState;
    const dispatch = useDispatch();

    const handleClose = () => {
        setState(values);
        setShow(false)
        setId(null);
    };

    const onEdit = (id) => {
        setId(id);
        if (isEmpty(id)) {
            setState({ ...values });
        } else {
            setState({ ...data[id] });
        }
        setShow(true);

    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({
            ...initialState,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        if (isEmpty(fullName) || isEmpty(mobile) || isEmpty(email) || isEmpty(address)) {
            setError("Ingresa todos los campos");
            setShowAlert(true);
        } else if (isEmpty(id)) {
            dispatch(addUserStart(initialState));
            setError("");
            dispatch(getUsersStart());
            handleClose();
        } else {
            dispatch(editUserStart({ initialState, id }));
            setError("");
            dispatch(getUsersStart());
            handleClose();
        }

    };

    return (
        <>
            <tbody>
                {Object.keys(data).map((id, index) => {

                    return (
                        <tr key={id}>
                            <th scope="row">{index + 1}</th>
                            <td>{data[id].fullName}</td>
                            <td>{data[id].mobile}</td>
                            <td>{data[id].email}</td>
                            <td>{data[id].address}</td>
                            <td>
                                <p className="btn text-primary"
                                    onClick={() => onEdit(id)}>
                                    <PencilSquare />
                                </p>

                                <p
                                    className="btn text-danger"
                                    onClick={() => onClick(id)}
                                >
                                    <Trash2 />
                                </p>

                                <Link to={`/view/${id}`}>
                                    <p className="btn text-info">
                                        <Eye />
                                    </p>
                                </Link>
                            </td>
                        </tr>


                    );

                })}
            </tbody>

            <Modal show={show} onHide={handleClose}>
                <Alerts showAlert={showAlert} setShowAlert={setShowAlert} error={error} />
                <Modal.Header closeButton>
                    <Modal.Title>{id ? 'Editar' : 'Agregar'} Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicFullName">
                            <Form.Label>Nombre completo</Form.Label>
                            <Form.Control name="fullName" value={fullName} onChange={handleInputChange} type="text" placeholder="Ingrese nombre completo" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control name="email" value={email} onChange={handleInputChange} type="email" placeholder="Ingrese correo electronico" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control name="password" value={password} onChange={handleInputChange} type="password" placeholder="Ingrese la contraseña" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress">
                                <Form.Label>Direccion</Form.Label>
                                <Form.Control name="address" value={address} onChange={handleInputChange} type="text" placeholder="Ingrese la direcciòn" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridMobile">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control name="mobile" value={mobile} onChange={handleInputChange} type="number" placeholder="Ingrese el telefono" />
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Guardar
                    </Button>
                </Modal.Footer>

            </Modal>



        </>
    );

};
export default UsersDataTable;