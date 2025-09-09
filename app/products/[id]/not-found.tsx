import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Not Found | UrbanMart",
  description: "The product you're looking for doesn't exist. Browse our other amazing products.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="text-center py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-4">Product Not Found</h1>
      <p className="text-lg text-slate-600 mb-6">
        Sorry, the product you&apos;re looking for doesn&apos;t exist or has been removed.
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
