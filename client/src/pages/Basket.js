import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CLOSE from '../img/close.svg';
import ID3 from '../img/Silver Reed LK 150.png';

const Basket = () => {
  const device ={id: 3, 
    name: 'Silver Reed LK 150', 
    price: '1.000.000', 
    img: ID3, 
    description: 'Однофонтурная ручная вязальная машина 4-го класса', 
    };
  return (
    <Container>
        <h1 style={{textAlign: "center", fontSize: 36, paddingBottom: 53}}>Корзина</h1>
        <Row className="d-flex align-items-center" style={{margin: 0, padding: 0, marginBottom: 134}}>
          <Col >
          <img style={{justifyContent: 'right'}} width={342} height={342} src={device.img} alt="" />
          </Col>
          <Col md={8} style={{textAlign: "left", marginLeft: -100}}>
            <p style={{fontSize: 40, fontWeight: 500}}>{device.name}</p>
            <p style={{fontSize: 23, color: 'rgba(0, 0, 0, 0.6)'}}>{device.description}</p>
            <input style={{marginLeft: 55, marginBottom: 71}} type="number" defaultValue={1} min={1} max={100} />
            <p style={{fontSize: 32}}>{device.price} руб.</p>
          </Col>
          <Col md={1}>
            <img width={28.64} height={28.64} src={CLOSE} />
          </Col>
        </Row>
        <Row className="d-flex" style={{marginBottom: 130}}>
          <h2 style={{fontSize: 40, fontWeight: 500, marginBottom: 78}}>Сумма заказа</h2>
          <Col>
            <h2 style={{lineHeight: 2}}>Стоимость товаров</h2>
            <h2>Стоимость доставки</h2>
          </Col>
          <Col style={{textAlign: "right"}}>
            <h2 style={{lineHeight: 2}}>{device.price} р.</h2>
            <h2>0 р.</h2>
          </Col>
        </Row>
        <Button 
        variant='outline-dark' 
        style={{width:"100%", height: 91, background: '#D9D9D9', borderRadius: 27, fontSize: 40, fontWeight: 500, color: 'black', marginBottom: 198}}>
        Оформить заказ</Button>
    </Container>
  );
}

export default Basket;