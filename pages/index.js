import Head from "next/head";
import style from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog List | Home</title>
        <meta name="keywords" content="Ninjas"></meta>
      </Head>
      <h1 className={style.title}>Home Page</h1>
      <p className={style.text}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </p>
      <p className={style.text}>
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Latin words, consectetur,
        from a Lorem Ipsum passage, and going through the cites of the word in
        classical literature, discovered the undoubtable source.
      </p>
      <Link href="/ninjas">
        <a className={style.btn}>See Blog List</a>
      </Link>
    </div>
  );
}
