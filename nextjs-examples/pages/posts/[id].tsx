import { GetStaticProps, GetStaticPaths } from 'next';

import styles from '../../styles/Home.module.css';

const Post = ({ post }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{post.name}</h1>
        <a href="/" className={styles.card}>
          <h3>Home</h3>
        </a>
      </main>

      <footer className={styles.footer}>Copyright by Nakito</footer>
    </div>
  );
};

// This function gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params);
  const res = await fetch(`${process.env.DB_HOST}/${params.id}`);
  const post = await res.json();

  return { props: { post } };
};

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(process.env.DB_HOST);
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: {
      id: post.id,
    },
  }));
  console.log(paths);
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export default Post;
