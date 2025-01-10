import React from 'react';
import { Card} from 'react-bootstrap';

const BrandItem = ({brand}) => {
    return (
        <div style={{marginBottom: 83}}>
            <Card style={{width: 342, cursor: 'pointer', border: 'none'}}>
                <Card.Img variant="top" src={brand.img}/>
                <Card.Body>
                    <Card.Title style={{fontSize: 24, textAlign: 'center', marginBottom: 1}}>{brand.name}</Card.Title>
                    <div style={{fontSize: 18, textAlign: 'center', lineHeight: 1.4, color: 'rgba(0, 0, 0, 0.6)'}}>{brand.description}</div>
                    <div style={{alignItems: 'center'}} className='d-flex justify-content-between align-items-center'>
                        {/* <div style={{fontSize: 20}}>{brand.price} руб.</div> */}
                        <div className='d-flex'>

                        </div>
                    </div>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default BrandItem;