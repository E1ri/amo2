import React from "react";
import styles from "./style.module.scss";
import { ReactComponent as LogoIcon } from "../../assets/logo_welbex.svg";
import { ReactComponent as TelegIcon } from "../../assets/telegram.svg";
import { ReactComponent as ViberIcon } from "../../assets/viber.svg";
import { ReactComponent as WhatsIcon } from "../../assets/whatsapp.svg";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <LogoIcon className={styles.header__logo} />
      <ul className={styles.header__menu}>
        <li className={styles.header__menu_el}>
          <a href="/">Услуги</a>
        </li>
        <li className={styles.header__menu_el}>
          <a href="/">Виджеты</a>
        </li>
        <li className={styles.header__menu_el}>
          <a href="/">Интеграции</a>
        </li>
        <li className={styles.header__menu_el}>
          <a href="/">Кейсы</a>
        </li>
        <li className={styles.header__menu_el}>
          <a href="/">Сертификаты</a>
        </li>
      </ul>
      <a
        className={styles.header__phone}
        href="tel:+75555555555"
        aria-label="Номер телефона"
      >
        +7 555 555-55-55
      </a>
      <div className={styles.header__icons_block}>
        <TelegIcon className={styles.header__icon} />
        <ViberIcon className={styles.header__icon} />
        <WhatsIcon className={styles.header__icon} />
      </div>
    </header>
  );
};
