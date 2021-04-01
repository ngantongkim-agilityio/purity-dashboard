import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Two = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Page Two</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Page two!!!</h1>
      </main>

      <footer className={styles.footer}>Copyright by Nakito</footer>
    </div>
  );
};

export default Two