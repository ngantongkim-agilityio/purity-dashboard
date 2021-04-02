import Head from "next/head";
import { GetStaticProps } from "next";
import styles from "../../styles/Home.module.css";

const Blog = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Post List</h1>

        <div className={styles.grid}>
          {posts.map((post) => (
            <a key={post.id} href={`/posts/${post.id}`} className={styles.card}>
              <h3>{`Page ${post.id}`}</h3>
            </a>
          ))}
        </div>

        <a href="/" className={styles.card}>
          <h3>Home</h3>
        </a>
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
