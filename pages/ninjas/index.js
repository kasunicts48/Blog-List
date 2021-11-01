import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Jobs.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <Head>
        <title>Blog List | Ninjas</title>
        <meta name="keywords" content="Ninjas"></meta>
      </Head>
      <h1>All Ninjas</h1>
      {ninjas.map((val, key) => {
        return (
          <Link href={`/ninjas/`+ val.id} key={key}>
            <a className={styles.single}>
              <h3> {val.name} </h3>
            </a>
          </Link>
        );
      })}

      {/* {ninjas.map(ninja => (
          <div key={ninja.id}>
              <a>
                  <h3> {ninja.name} </h3>
              </a>
          </div>
      ))} */}
    </div>
  );
};

export default Ninjas;
