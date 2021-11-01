import Link from "next/link";
import Image from "next/image"

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="Blog Logo" width={128} height={77} />
      </div>
      <div className="navigation">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/ninjas">
          <a>Blog List</a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
