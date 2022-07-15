import Head from "next/head";
import styles from './styles.module.scss';

export default function Posts() {
  return (
   <>
   <Head>
    <title>Posts | Ignews</title>
   </Head>

   <main className={styles.container}>
    <div className={styles.posts}>
      <a href="#">
        <time>12 may of 2200</time>
        <strong>titulo do post</strong>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ex tenetur quas enim minima doloremque, beatae officiis explicabo iste odio asperiores maiores laborum hic possimus magnam modi est magni ducimus.</p>
      </a>
      <a href="#">
        <time>12 may of 2200</time>
        <strong>titulo do post</strong>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ex tenetur quas enim minima doloremque, beatae officiis explicabo iste odio asperiores maiores laborum hic possimus magnam modi est magni ducimus.</p>
      </a>
      <a href="#">
        <time>12 may of 2200</time>
        <strong>titulo do post</strong>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ex tenetur quas enim minima doloremque, beatae officiis explicabo iste odio asperiores maiores laborum hic possimus magnam modi est magni ducimus.</p>
      </a>
    </div>
   </main>
   </>
  )
}