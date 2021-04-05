import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import styles from '../../styles/Home.module.css';

const Blog = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Post List</h1>

        <ul className={styles.grid}>
          {posts.map((post) => (
            <li key={post.id} className={styles.card}>
              {/* <Link href={`/posts/${post.id}`}> */}
              <Link
                href={{
                  pathname: '/posts/[[...id]]',
                  query: { id: ['test', post.id], name: post.name },
                }}

                // href={{
                //   pathname: '/posts/[...id]',
                //   query: { id: ['test', post.id]},
                // }}

                // href={{
                //   pathname: '/posts/[id]',
                //   query: { id: post.id, name: post.name },
                // }}
              >
                <a>
                  <h3>{`Page ${post.id}`}</h3>
                </a>
              </Link>
            </li>
          ))}
        </ul>

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
export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get posts
  const res = await fetch(process.env.DB_HOST);
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
};

export default Blog;
