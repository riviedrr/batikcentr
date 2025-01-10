import React from 'react';

import styles from '../styles/contacts.module.css';

import CALL from '../img/call.svg';
import SOCIAL from '../img/social.svg';
import MAP from '../img/map.svg';
import MAIL from '../img/mail.svg';

const Contacts = () => {
  return (
    
    <div className={styles.contacts}>
      <h1>Контакты</h1>
      <div className={styles.column}>
        <div className={styles.block_left}>
          <h2>Обратная связь</h2>
          <form id="contactform" name="contact" method="post" action="#">
            <ul>
              <li><label for="name">Ваше имя</label><input className={styles.input} id="name" type="text" name="name" /></li>
              <li><label for="usernumber">Телефон</label><input className={styles.input} id="usernumber" type='text' name='usernumber' required /></li>
              <li><label for="message">Комментарий</label><textarea className={styles.input} id="message" name="message"></textarea></li>
              <label for="agree">Согласие</label><input className={styles.checkbox} id="agree" type="checkbox" value="yes"/><p>Согласен с политикой конфиденциальности 
                персональных данных ознакомлен и даю свое согласие на их обработку</p>
              <input className={styles.button} type="submit" value="Отправить" />
            </ul>
          </form>
        </div>
        <div className={styles.block_right}>
          <ul>
            <h3><img src={CALL} alt='Call'/>Позвоните мне</h3>
            <li><a href='tel:8-912-601-06-60'>8-912-601-06-60</a></li>
            <li><a href='tel:8(343)266-48-80'>8(343)266-48-80</a></li>
          </ul>
          <ul>
            <h3><img src={MAIL} alt='Social'/>Напишите нам</h3>
            <li><a href='#'>WhatsApp</a></li>
            <li><a href='https://t.me/batikcentr'>Telegram</a></li>
            <li><a href='https://vk.com/batikcentr'>ВКонтакте</a></li>
            <li><a href='mailto:vt@batikcentr.ru'>vt@batikcentr.ru</a></li>
            <li><a href='mailto:sales@batikcentr.ru'>sales@batikcentr.ru</a></li>
          </ul>
          <ul>
            <h3><img src={MAP} alt='Map'/>Посетите нас</h3>
            <li><p>г. Екатерибург, пр. Ленина, д. 38а, офис 423</p></li>
          </ul>
          <ul>
            <h3><img src={SOCIAL} alt='Mail'/>Наши соц. сети</h3>
            <li><a href='https://vk.com/batikcentr'>ВКонтакте</a></li>
            <li><a href='https://www.youtube.com/batikcentr/'>YouTube</a></li>
            <li><a href='https://boosty.to/batikcentr'>Boosty</a></li>
            <li><a href='https://t.me/batikcentr'>Telegram</a></li>
          </ul>
        </div>
      </div>
    </div>
    // <div className={styles.contacts}>
    //     <img src={IMAGE} alt='Call'/>
    //     <p>8-912-601-06-60</p>
    //     <p>8(343)266-48-80</p>
    // </div>
  );
}

export default Contacts;