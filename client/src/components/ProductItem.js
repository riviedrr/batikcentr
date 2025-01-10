import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { PRODUCT_ROUTE } from '../utilis/consts';

import BASKET from '../img/basket.svg';
import FAVOURITES from '../img/favourites.svg'

const ProductItem = ({product}) => {
    const navigate = useNavigate();
    return (
        <div style={{marginBottom: 83}} onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}>
            <Card style={{width: 342, cursor: 'pointer', border: 'none'}}>
                <Card.Img variant="top" src={product.img}/>
                <Card.Body>
                    <Card.Title style={{fontSize: 24, textAlign: 'center', marginBottom: 17}}>{product.name}</Card.Title>
                    <div style={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 18, textAlign: 'center', lineHeight: 1.4, borderBottom: '1px solid #000000'}}>{product.description}</div>
                    <div style={{alignItems: 'center', marginTop: 17}} className='d-flex justify-content-between align-items-center'>
                        <div style={{fontSize: 20}}>{product.price} руб.</div>
                        <div className='d-flex'>
                            <img style={{marginRight: 17}} width={37} height={37} src={FAVOURITES} />
                            <img width={37} height={37} src={BASKET} />
                        </div>
                    </div>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductItem;