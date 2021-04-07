import useSwr from 'swr';
import Head from 'next/head';
import Link from 'next/link';
import Error from 'next/error';
import { GetStaticProps } from 'next';
import styles from '../../styles/Home.module.css';

const Blog = ({ errorCode, posts }) => {
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  // const { data, error } = useSwr(`http://localhost:4001/products`, fetcher);
  // const { data, error } = useSwr('api/posts', fetcher);

  // if (error) return <div>Failed to load posts</div>;
  // if (!data) return <div>Loading...</div>;

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

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
  const res = await fetch(`${process.env.DB_HOST}/products`);
  const errorCode = res.ok ? false : res.status;
  console.log('ERROR==>', res.statusText);
  const posts = await res.json();

  // const importDynamic = (await import('../../db.json')).default;

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      errorCode,
      posts,
    },
  };
};

export default Blog;
