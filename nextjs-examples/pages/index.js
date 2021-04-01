import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello world!!!</h1>

        <div className={styles.grid}>
          <a href="/one" className={styles.card}>
            <h3>Page 1</h3>
          </a>

          <a href="/two" className={styles.card}>
            <h3>Page 2</h3>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>Copyright by Nakito</footer>
    </div>
  );
};

export default Home;
