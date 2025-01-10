import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import {Context} from "../../index";


const CreateProduct = ({show, onHide}) => {
    const {product} = useContext(Context)
    const [info, setInfo] = React.useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    return (
        <Modal
          show={show}
          onHide={onHide}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Добавить товар
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-dark" className="mt-2 mb-2" id="dropdown-basic">Выберите тип продукции</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {product.types.map(type =>
                            <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-dark" className="mt-2 mb-2" id="dropdown-basic">Выберите бренд</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {product.brands.map(brands =>
                            <Dropdown.Item key={brands.id}>{brands.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    className="mt-3"
                    placeholder="Введите название товара"
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Введите стоимость товара"
                    type='number'
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Введите фото товара"
                    type='file'
                />

                <Form.Control
                    className="mt-3"
                    placeholder="Введите описание товара"
                />
                <hr/>
                <Button variant='outline-dark' onClick={addInfo}>
                    Добавить новое свойство
                </Button>
                {info.map(i =>
                <Row className="mt-3" key={i.number}>
                    <Col md={4}>
                        <Form.Control
                            placeholder="Введите название свойства"
                        />
                    </Col>
                    <Col md={4}>
                        <Form.Control
                            placeholder="Введите описание свойства"
                        />
                    </Col>
                    <Col md={4}>
                        <Button onClick={() => removeInfo(i.number)} variant='outline-danger'>Удалить</Button>
                    </Col>
                </Row>
   
                )}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          </Modal.Footer>
        </Modal>
    );
};

export default CreateProduct;