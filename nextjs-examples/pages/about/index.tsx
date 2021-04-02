import Head from 'next/head';
import styles from '../../styles/Home.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Nakito Tong</h1>
        <a href="/" className={styles.card}>
          <h3>Home</h3>
        </a>
      </main>

      <footer className={styles.footer}>Copyright by Nakito</footer>
    </div>
  );
};

export default About;
