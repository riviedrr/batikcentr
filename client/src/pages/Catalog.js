import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductItem from '../components/ProductItem';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Catalog = observer(() => {
  const {product} = useContext(Context)
  return (
    <Container>
      <h1 style={{textAlign: "center", fontSize: 36, paddingBottom: 53}}>Все товары</h1>
      <Row className={"d-flex"}>
          {product.products.map(product =>
          <Col md={3}>
            <ProductItem key={product.id} product={product}/>
          </Col>
          )}
      </Row>
    </Container>
  );
});

export default Catalog;