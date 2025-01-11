import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ID3 from '../img/Silver Reed LK 150.png';
import FAVOURITES from '../img/favourites.svg';
import useEffect from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneProduct } from '../components/http/API';


const ProductPage = () => {
  const [product, setProduct] = React.useState({info: []});
  const {id} = useParams();

  useEffect(() => {
    fetchOneProduct(id)
      .then(data => set(data))
  })
  // const product ={id: 3, 
  //                name: 'Silver Reed LK 150', 
  //                price: '1.000.000', 
  //                img: ID3, 
  //                description: 'Однофонтурная ручная вязальная машина 4-го класса', 
  //                };
  // const description = [
  //   {id: 1, title: 'Тип', description: 'Вязальная машина'},
  //   {id: 2, title: 'Класс', description: '4'},
  //   {id: 3, title: 'Количество игл', description: '150'}
  // ]
  return (
    <div>
      <Row className="d-flex">
        <Col style={{marginTop: 30, display: 'flex', justifyContent: 'center'}}>
          <img src={process.env.REACT_APP_API_URL + product.img} alt="" />
        </Col>
        <Col style={{marginTop: 70, marginLeft: -80}}>
          <h1 style={{fontSize: 65, fontWeight: 600, marginLeft: -100}}>{product.name}</h1>
          <p style={{fontSize: 27.47, color: 'rgba(0, 0, 0, 0.9)', paddingBottom: 30}}>{product.description}</p>
          <p style={{fontSize: 43.64}}>{product.price} руб.</p>
          <div className="d-flex" style={{marginTop: 130}}>
            <button style={{width: 305, height: 58, background: 'white', borderRadius: 27, fontSize: 20, fontWeight: 500, color: 'black'}}>Добавить в корзину</button>
            <a style={{marginLeft: 20, cursor: 'pointer'}}><img src={FAVOURITES}></img></a>
          </div>
        </Col>
      </Row>
      <div style={{marginTop: 91, marginLeft: 100, fontSize: 26.39}}>
        <h2 style={{marginBottom: 35}}>Характеристики</h2>
        <Row style={{marginBottom: 50}}>
          {product.info.map(info =>
            <ul >
              <li style={{lineHeight: 1}}key={info.id}>
                {info.title}: {info.description}
              </li>
            </ul>
          )}
        </Row>
      </div>
    </div>
  );
}

export default ProductPage;