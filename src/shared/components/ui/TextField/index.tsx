import { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  Icon?: ReactNode;
  error?: { message: string };
  id: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextField = ({ Icon, error, className, id, ...rest }: Props) => {
  const inputClassName = error
    ? `${styles.textField__container} error`
    : styles.textField__container;
  return (
    <div className={`${inputClassName} ${className}`}>
      {Icon && (
        <label className={styles.textField__icon} htmlFor={id}>
          {Icon}
        </label>
      )}
      <input
        id={id}
        className={styles.textField__input}
        type="text"
        {...rest}
      />
    </div>
  );
};

export default TextField;
