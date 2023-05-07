import React from "react";
import styles from "./style.module.scss";
import { ReactComponent as TelegIcon } from "../../assets/telegram.svg";
import { ReactComponent as ViberIcon } from "../../assets/viber.svg";
import { ReactComponent as WhatsIcon } from "../../assets/whatsapp.svg";

type Column = { title: string; id: number }[];

const firstColumn: Column = [
  { title: "Партнёрская программа", id: 1 },
  { title: "Вакансии", id: 2 },
];

const secondColumn: Column = [
  { title: "Расчёт стоимости", id: 1 },
  { title: "Услуги", id: 2 },
  { title: "Виджеты", id: 3 },
  { title: "Интеграции", id: 4 },
  { title: "Наши клиенты", id: 5 },
  { title: "Кейсы", id: 6 },
  { title: "Благодарственные письма", id: 7 },
  { title: "Сертификаты", id: 8 },
  { title: "Блог на Youtube", id: 9 },
  { title: "Вопрос / Ответ", id: 10 },
];

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__main}>
        <div className={styles.footer__main_left}>
          <h4 className={styles.footer__main_heading}>О компании</h4>
          <ul className={styles.footer__main_list}>
            {firstColumn.map((el) => (
              <li key={el.id} className={styles.footer__main_list_element}>
                <a href="/">{el.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footer__main_middle}>
          <h4 className={styles.footer__main_heading}>Меню</h4>
          <ul className={styles.footer__main_list}>
            {secondColumn.map((el) => (
              <li className={styles.footer__main_list_element}>
                <a href="/">{el.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footer__main_right}>
          <h4 className={styles.footer__main_heading}>Контакты</h4>
          <a
            className={styles.footer__main_right_number}
            href="tel:+75555555555"
            aria-label="Номер телефона"
          >
            +7 555 555-55-55
          </a>
          <div className={styles.footer__main_right_icons}>
            <TelegIcon className={styles.footer__main_icon} />
            <ViberIcon className={styles.footer__main_icon} />
            <WhatsIcon className={styles.footer__main_icon} />
          </div>
          <p className={styles.footer__main_right_text}>
            Москва, Путевой проезд 3с1, к 902
          </p>
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <p className={styles.footer__bottom_trademark}>
          ©WELBEX 2022. Все права защищены.
        </p>
        <a
          className={styles.footer__bottom_link}
          href="/"
          target="_blank"
          rel="noreffer"
          aria-label="Политика конфиденциальности"
        >
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
};
