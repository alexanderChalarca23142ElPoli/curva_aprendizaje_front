import React from 'react';
import { ToastContainer } from 'react-bootstrap';

import Toast from 'react-bootstrap/Toast';

const Alerts = ({ showAlert, setShowAlert, error }) => {
    //const [show, setShow] = useState(false);

    /*return (
        <Row>
            <Col xs={6}>
                <Toast onClose={() => setShowAlert(false)} show={showAlert} delay={3000} autohide>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!{error}</Toast.Body>
                </Toast>
            </Col>
        </Row>
    );*/
    return (
        <ToastContainer>
            <Toast onClose={() => setShowAlert(false)} show={showAlert} className="d-inline-block m-1" bg='danger'>
                <Toast.Header>
                    <img src="../../public/logo512.png" className="rounded me-2" alt="" />
                    <strong className="me-auto">Mensaje alerta</strong>
                    <small className="text-muted">justo ahora</small>
                </Toast.Header>
                <Toast.Body>{error}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default Alerts;