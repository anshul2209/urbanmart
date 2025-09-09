import React from "react";

export function ProductCardSkeleton() {
  return (
    <div className="card animate-pulse flex flex-col gap-3 p-4">
      <div className="relative w-full aspect-[4/3] md:aspect-square overflow-hidden rounded-xl bg-neutral flex items-center justify-center">
        <div className="w-2/3 h-2/3 bg-primary/10 rounded-xl" />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <div className="h-5 bg-primary/10 rounded w-3/4" />
        <div className="h-4 bg-accent/20 rounded w-1/2" />
        <div className="h-3 bg-primary/10 rounded w-1/3" />
      </div>
    </div>
  );
}
