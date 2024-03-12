import styles from "./styles.module.css";

type Props = {
  text: string;
  className?: string;
};

const Label = ({ text, className }: Props) => (
  <span className={`${styles.label} ${className}`}>{text}</span>
);

export default Label;
