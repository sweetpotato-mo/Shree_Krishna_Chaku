import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-parchment flex items-center justify-center p-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">404</h2>
        <p className="text-xl mb-6">Page Not Found</p>
        <Link
          href="/"
          className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}




