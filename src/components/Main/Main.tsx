import React from "react";
import styles from "./style.module.scss";
import { Button } from "../Button/Button";

export const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main__left}>
        <h1 className={styles.main__left_heading}>
          Зарабатывайте больше <p>с WELBEX</p>
        </h1>
        <p className={styles.main__left_text}>
          Развиваем и контролируем продажи за вас
        </p>
      </div>
      <div className={styles.main__right}>
        <h2 className={styles.main__right_heading}>
          Вместе с <span>БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы дарим:
        </h2>
        <div className={styles.main__right_adv}>
          <div className={styles.main__right_adv_block}>
            <div className={styles.main__right_adv_element}>
              Виджеты:<p>30 готовых решений</p>
            </div>
            <div className={styles.main__right_adv_element}>
              Dashboard<p>с показателями вашего бизнеса</p>
            </div>
          </div>
          <div className={styles.main__right_adv_block}>
            <div className={styles.main__right_adv_element}>
              Skype Аудит<p>отдела продажи CRM системы</p>
            </div>
            <div className={styles.main__right_adv_element}>
              35 дней<p>использования CRM</p>
            </div>
          </div>
        </div>
        <div className={styles.main__right_adv_mobile}>
          <p className={styles.main__right_mobile_el}>
            <span>—</span> Skype аудит
          </p>
          <p className={styles.main__right_mobile_el}>
            <span>—</span> 30 виджетов
          </p>
          <p className={styles.main__right_mobile_el}>
            <span>—</span> Dashboard
          </p>
          <p className={styles.main__right_mobile_el}>
            <span>—</span> Месяц amoCRM
          </p>
        </div>
        <Button
          className={styles.main__btn}
          title="Получить консультацию"
          onClick={() => console.log("click!")}
        />
      </div>
    </main>
  );
};
