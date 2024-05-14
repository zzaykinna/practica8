import React, { useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import TypeBar from '../TypeBar';
import ProductList from '../ProductList';
import { Context } from '../../index';
import { fetchCategory, fetchProduct } from '../../http/productAPI';
import { observer } from 'mobx-react-lite';
import Pages from '../Pages';

const Catalog = observer(() => {
  const { product } = useContext(Context)

  useEffect(() => {
    fetchCategory().then(data => product.setCategores(data));
    fetchProduct(null, null, 1, 6).then(data => {
      product.setProducts(data.rows);
      product.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchProduct(product.selectedCategory.id,  product.page, 6).then(data => {
      product.setProducts(data.rows);
      product.setTotalCount(data.count);
    });
  }, [product.page, product.selectedCategory]);

  return (
    <Container>
      <Row className='mt-3'>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <ProductList />
          <Pages />
        </Col>
      </Row>

    </Container>
  );
})

export default Catalog;