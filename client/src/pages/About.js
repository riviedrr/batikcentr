import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slider from "react-slick";

import IMAGE from '../img/black.jpg';

import styles from '../styles/about.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className={styles.about}>
      <div className={styles.about_first}>
        <div className={styles.first_column}>
          <img src={IMAGE} alt="///" />
          <img src={IMAGE} alt="///" />
        </div>
        <div className={styles.second_column}>
          <h2>О компании Batikcentr</h2>
          <hr />
          <h3>2010</h3>
          <p1>Наша компания ООО "Батик-центр", работает с <b>2010</b> года.</p1>
          <p>Все началось с создания в 2010 году торгово-обучающего центра, 
            где мы и по сей день занимаемся обучением батику, а так же продажей красок, 
            инструментов и тканей для этого вида творчества. </p>
          <h3>2012</h3>
          <p>C <b>2012</b> занимаемся развитием технологии ТИСЭ (технологии индивидуального строительства) 
            в Уральском регионе, являясь официальными дилерами фирмы ТИСЭ. 
            Подробнее смотрите на нашем сайте: <a href="https://tise-ural.ru/">tise-ural.ru</a></p>
        </div>
      </div>
      <div className={styles.about_text}>
        <h3>2013</h3>
        <p>С 2013 года у нас успешно проходят курсы по машинному вязанию.</p>
      </div>
      <div className={styles.graduation}>
        <h2>Наши выпускники</h2>
        <Carousel>
          <Carousel.Item>
          <img src={IMAGE} alt="First slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={IMAGE} alt="Second slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={IMAGE} alt="Third slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <a href="https://vk.com/album-180683088_294760113">Наш фото-альбом в ВКонтакте</a>
      </div>
      <div className={styles.about_text}>
        <h3>2014</h3>
        <p>С <b>2014</b> года начали обучать таким видам хобби как - декупаж, декорирование предметов, 
          роспись по различным поверхностям, а так же создание авторской бижутерии. 
          Создав в рамках Батик-центра Уральскую Школу Декора.</p>
          <p1>Можете посетить ее сайт: <a href="https://uraldekor.ru/">uraldekor.ru</a></p1>
      </div>
      <div className={styles.carousel}>
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
      </div>
      <div className={styles.about_text}>
        <h3>2017</h3>
        <p className={styles.about_end}>С <b>2017</b> года, мы начали продавать вязальные машины, програмное обеспечение для вязания
           - DesignaKnit8, а так же дополнительное оборудование для машинного вязания, 
           студентам наших курсов машинного вязания. Тогда же мы открыли этот интернет-магазин для 
           вашего удобства в плане ознакомления с нашим ассортиментом и упрощения процедуры заказов 
           товаров.</p>
      </div>
    </div>
  );
}

export default About;