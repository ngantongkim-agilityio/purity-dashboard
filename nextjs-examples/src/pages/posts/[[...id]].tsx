import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';

import styles from '../../styles/Home.module.css';

const Post = ({ post }) => {
  const router = useRouter();
  const { name } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{post.name}</h1>
        <Link href="/">
          <a className={styles.card}>
            <h3>Home</h3>
          </a>
        </Link>
      </main>

      <footer className={styles.footer}>Copyright by Nakito</footer>
    </div>
  );
};

// This function gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('PARAM', params);
  const res = await fetch(`${process.env.DB_HOST}/${params.id[1]}`);
  const post = await res.json();

  return { props: { post } };
};

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  console.log('Paths');
  const res = await fetch(process.env.DB_HOST);
  let posts = await res.json();
  const paths = posts.map((post) => ({
    params: {
      id: ['test', post.id],
    },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
};

export default Post;
