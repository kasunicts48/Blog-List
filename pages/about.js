import Head from "next/head";

const about = () => {
  return (
    <div>
      <Head>
        <title>Blog List | About</title>
        <meta name="keywords" content="Ninjas"></meta>
      </Head>
      <h1>About Page</h1>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </p>
      <p>
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Latin words, consectetur,
        from a Lorem Ipsum passage, and going through the cites of the word in
        classical literature, discovered the undoubtable source.
      </p>
    </div>
  );
};

export default about;
