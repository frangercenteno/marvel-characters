import styles from "./styles.module.css";

type Props = {
  message?: string;
};

const ErrorMessage = ({ message }: Props) => {
  return (
    <div className={styles.errorContainer} data-testid="error-message">
      <h3 className={styles.errorContainer__title}>Something Wrong!</h3>
      {message ? (
        <p className={styles.errorContainer__message}>{message}</p>
      ) : null}
    </div>
  );
};

export default ErrorMessage;
