import styles from '../styles/Home.module.css';

export const Button = (props) => {
  return <button type="button" className={styles.btn} {...props} />;
};
