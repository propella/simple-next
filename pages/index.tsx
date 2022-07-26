import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>Hello, World!</p>
      <p>
        <Link href="static">Static rendering</Link>
      </p>
      <p>
        <Link href="ssr">Server side rendering</Link>
      </p>
    </>
  );
}
