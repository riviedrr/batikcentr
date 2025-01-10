import React from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateProduct from '../components/modals/CreateProduct';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
  const [brandVisible, setBrandVisible] = React.useState(false);
  const [productVisible, setProductVisible] = React.useState(false);
  const [typeVisible, setTypeVisible] = React.useState(false);
  return (
    <Container className='d-flex flex-column'>
        <Button variant='outline-dark' className='mb-4' onClick={() => setProductVisible(true)}>Добавить товар</Button>
        <Button variant='outline-dark' className='mb-4' onClick={() => setBrandVisible(true)}>Добавить бренд</Button>
        <Button variant='outline-dark' className='mb-4' onClick={() => setTypeVisible(true)}>Добавить тип</Button>
    <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
    <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
    <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
    </Container>
    
  );
}

export default Admin;