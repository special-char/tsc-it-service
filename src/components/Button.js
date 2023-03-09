import styles from "./button.module.css";

const Button = ({ text }) => {
  return <div className={styles.btn}>{text}</div>;
};

export default Button;
