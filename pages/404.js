import Link from "next/link";
import Image from "next/image";
const NotFound = () => {
  return (
    <div className="not-found">
      <Image src="/404Error.png" alt="Blog Logo" width={300} height={200} />
      <h1>Page Not Found!</h1>
      <Link href="/">
        <a>Go back to the HomePage</a>
      </Link>
      <br />
      <br />
    </div>
  );
};

export default NotFound;
