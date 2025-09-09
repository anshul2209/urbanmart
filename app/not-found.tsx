import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | UrbanMart",
  description: "The page you're looking for doesn't exist. Browse our amazing products instead.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-slate-800 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-slate-600 mb-6">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className="space-x-4">
        <Link href="/" className="btn-accent">
          Back to Home
        </Link>
        <Link href="/" className="text-orange-400 hover:text-amber-700 transition-colors">
          Browse Products
        </Link>
      </div>
    </div>
  );
}
