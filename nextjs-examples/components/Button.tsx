import styles from '../styles/Home.module.css';

const Button = (props) => {
  return <button type="button" className={styles.btn} {...props} />;
};

export default Button;
