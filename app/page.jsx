import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img src='/logo.png' alt='A server surrounded by magic sparkles.' />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Link href={"/about"}>About</Link>
      <Link href={"/meals"}>Meals</Link>
      <Link href={"/meals/share-1"}>Share 1</Link>
      <Link href={"/meals/share-2"}>Share 2</Link>
    </main>
  );
}
