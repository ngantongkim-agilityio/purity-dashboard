import styles from "../../styles/Home.module.css";

const Post = ({ product }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{product.name}</h1>
      </main>

      <footer className={styles.footer}>Copyright by Nakito</footer>
    </div>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(`http://localhost:4001/products/${params.id}`);
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Post;
