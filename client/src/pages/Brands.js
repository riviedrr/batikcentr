import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '../index';
import BrandItem from '../components/BrandItem';


const Brands = observer(() => {
  const {product} = useContext(Context)
  return (
    <Container>
      <h1 style={{textAlign: "center", fontSize: 36, paddingBottom: 53}}>Бренды</h1>
      <Row className="d-flex">
          {product.brands.map(brand =>
          <Col md={3}>
              <BrandItem key={brand.id} brand={brand}/>
            </Col>
          )}
      </Row>
    </Container>
  );
});

export default Brands;