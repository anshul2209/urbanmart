"use client";

export default function GlobalError({ error }: { error: unknown }) {
  console.error(error);
  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
      <p className="text-gray-600">Please refresh the page or try again later.</p>
    </div>
  );
}


