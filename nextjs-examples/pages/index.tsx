import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my App!</h1>
        <Image
          src="/test.jpg"
          alt="Picture of the home"
          width={500}
          height={200}
          // layout="responsive"
        />

        <div className={styles.grid}>
          <Link href="/blogs" >
            <a className={styles.card}>
              <h3>Blog</h3>
            </a>
          </Link>

          <a href="/about" className={styles.card}>
            <h3>About</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>Copyright by Nakito</footer>
    </div>
  );
};

export default Home;
