import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex gap-4">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/posts" className="hover:underline">
          Posts
        </Link>
        <Link href="/users" className="hover:underline">
          Users
        </Link>
      </nav>
    </header>
  );
};

export default Header;
