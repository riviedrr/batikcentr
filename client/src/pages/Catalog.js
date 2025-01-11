import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductItem from '../components/ProductItem';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { useEffect } from 'react';
import Pages from '../components/Pages';


const Catalog = observer(() => {
  const {product} = useContext(Context)

  useEffect(() => {
    product.fetchProducts(null, null, 1, 12).then(data => {
      product.setProducts(data.rows)
      product.setTotalCount(data.count)
      })
  }, [])

  useEffect(() => {
    product.fetchProducts(product.selectedType.id, product.selectedBrand.id, product.page, 12).then(data => {
      product.setProducts(data.rows)
      product.setTotalCount(data.count)
      })
  }, [product.page, product.selectedType, product.selectedBrand,])

  return (
    <Container>
      <h1 style={{textAlign: "center", fontSize: 36, paddingBottom: 53}}>Все товары</h1>
      <Row className={"d-flex"}>
          {product.products.map(product =>
          <Col md={3}>
            <ProductItem key={product.id} product={product}/>
          </Col>
          )}
          <Pages/>
      </Row>
    </Container>
  );
});

export default Catalog;