import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

const About = () => {
  const router = useRouter();

  useEffect(() => {
    // Always do navigations after the first render
    router.push('/about', '/about?counter=10', { shallow: true });
  }, []);

  useEffect(() => {
    // The counter changed!
  }, [router.query.counter])

  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Nakito Tong</h1>
        {/* <Link href="/">
          <a className={styles.card}>
            <h3>Home</h3>
          </a>
        </Link> */}
        <a className={styles.card}>
          <span onClick={() => router.push('/')}>Click here to Home</span>
        </a>
      </main>

      <footer className={styles.footer}>Copyright by Nakito</footer>
    </div>
  );
};

export default About;
