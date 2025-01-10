import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import Slider from "react-slick";

// import IMAGE from '../img/placeholder.svg';
import IMAGE from '../img/black.jpg';

import styles from '../styles/shop.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ADMIN_ROUTE } from '../utilis/consts';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../index';


const Shop = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
const navigate = useNavigate()
const {user} = useContext(Context)
  return (
    <div className={styles.shop}>
      <Carousel>
        <Carousel.Item>
        <img className={styles.images} src={IMAGE} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className={styles.images} src={IMAGE} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className={styles.images} src={IMAGE} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <p className={styles.head}>Почему мы?</p>
      <div className={styles.why_us}>
        <div className={styles.why_us_columns}>
          <img src={IMAGE} alt='///' />
          <p>Большой опыт работы в сфере</p>
          <p>***</p>
        </div>
        <div className={styles.why_us_columns}>
          <img src={IMAGE} alt='///' />
          <p>Официальные дистрибьютеры</p>
          <p>***</p>
        </div>
        <div className={styles.why_us_columns}>
          <img src={IMAGE} alt='///' />
          <p>Широкий выбор ассортимента</p>
          <p>***</p>
        </div>
      </div>
      <div className={styles.popular}>
        <h2 className={styles.head}>Популярные товары</h2>
        <div className={styles.popular_columns}>
          {/* Написать популярные товары */}
        </div>
      </div>
      <div className={styles.courses}>
        <h2 className={styles.head}>Курсы машинного вязания</h2>
        <img src={IMAGE} alt='///' />
        <button>узнать подробнее в наших соцсетях...</button>
      </div>
      <h2 className={styles.head}>Отзывы наших покупателей</h2>
      <div className={styles.reviews}>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <h3><img src={IMAGE} alt='1' /></h3>
            </div>
            <div>
              <h3><img src={IMAGE} alt='2' /></h3>
            </div>
            <div>
              <h3><img src={IMAGE} alt='3' /></h3>
            </div>
            <div>
              <h3><img src={IMAGE} alt='4' /></h3>
            </div>
            <div>
              <h3><img src={IMAGE} alt='5' /></h3>
            </div>
            <div>
              <h3><img src={IMAGE} alt='5' /></h3>
            </div>
          </Slider>
        </div>
        <button className={styles.button}>смотреть ещё</button>
      </div>
      {user.isAuth ? <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button> : <p></p>}
    </div>
  );
}

export default Shop;