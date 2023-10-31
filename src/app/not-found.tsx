import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex w-screen h-screen flex-col justify-center items-center text-center space-y-2">
      <h1 className="font-extrabold text-9xl">404</h1>
      <h2 className="font-bold text-xl">Not Found</h2>
      <p>{`Could not find requested page or you're not authorized`}</p>
      <div className="space-x-4 [&>a]:underline text-blue-600">
        <Link href="/">Return Home</Link>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
}
