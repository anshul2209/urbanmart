"use client";

export default function ProductError({ error }: { error: unknown }) {
  console.error(error);
  return <div className="py-10 text-red-600">Failed to load product.</div>;
}


