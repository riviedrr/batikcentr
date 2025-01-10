import React from 'react';

import styles from '../styles/footer.module.css';

import LOGO from '../img/batikcentr.svg';

import { ABOUT_ROUTE, CONTACTS_ROUTE } from '../utilis/consts';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <ul>
            <img className={styles.logo} src={LOGO} alt='Логотип'></img>
            <p className={styles.number}>8(343)266-48-80</p>
            <p>звонки доступны с 9:00 до 18:00</p>              
        </ul>
        <ul>
            <h3>Клиентам</h3>
            <li><a href='#'>Оплата</a></li>
            <li><a href='#'>Доставка</a></li>
            <li><a href='#'>Кредит</a></li>
            <li><a href='#'>Возврат</a></li>
            <li><a href='#'>Поддержка</a></li>
            <li><a href='#'>Бесплатные видео-курсы</a></li>
        </ul>
        <ul>
          <h3>О нас</h3>
          <li><a href={ABOUT_ROUTE}>О компании</a></li>
          <li><a href='#'>Публичный договор оферта</a></li>
          <li><a href={CONTACTS_ROUTE}>Контакты</a></li>
        </ul>
        <ul>
            <h3>Наши соцсети</h3>
            <li><a href='https://vk.com/batikcentr'>ВКонтакте</a></li>
            <li><a href='https://www.youtube.com/@batikcentr'>YouTube</a></li>
            <li><a href='https://boosty.to/batikcentr'>Boosty</a></li>
            <li><a href='https://t.me/batikcentr'>Телеграм</a></li>
        </ul>
    </div>
  );
}

export default Footer;