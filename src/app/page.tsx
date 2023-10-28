import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>This is the landing page</p>
      <Link href="/login">Login</Link>
    </main>
  );
}
