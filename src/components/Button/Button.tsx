import React from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

interface IButton {
  disabled?: boolean;
  title: string;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export const Button: React.FC<IButton> = ({
  disabled,
  title,
  onClick,
  className,
}) => {
  const style = classNames({ [styles.button]: true }, className && className);
  return (
    <button className={style} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};
