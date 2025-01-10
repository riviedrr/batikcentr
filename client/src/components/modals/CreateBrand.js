import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CreateBrand = ({show, onHide}) => {
    return (
        <Modal
          show={show}
          onHide={onHide}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Добавить бренд
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Control
                    className="mt-3"
                    placeholder="Введите название бренда"
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Введите описание бренда"
                />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;